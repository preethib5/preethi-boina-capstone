const express = require("express");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user");
const blogModel = require("../models/blog");
const authorize = require("../middleware/authorize");

router.get("/bookshelf/users/", (req, res) => {
  userModel.fetchAll().then((b) => {
    res.status(200).json(b);
  });
});

router.get("/bookshelf/users/:id", (req, res) => {
  userModel
    .where({ id: req.params.id })
    .fetchAll()
    .then((users) => {
      blogModel
        .where({ User_Id: req.params.id })
        .fetch()
        .then((blog) => {
          res.status(200).json({ ...users.models[0].attributes, blogs: blog });
        });
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

router.post("/", (req, res) => {
  const { password } = req.body;
  bcrypt
    .hash(password, 8)
    .then((hashedPassword) => {
      userModel.forge({ ...req.body, password: hashedPassword })
        .save(null,{method:"insert"})
        .then((user) => {
          const token = jwt.sign(
            { id: user.id, email: user.attributes.email },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
          );
          res.status(201).json({user,token} );
        })
         .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
   
  });

//Login User
router.post("/login", async (req, res) => {
  userModel
    .where({ email: req.body.email })
    .fetch()
    .then((user) => {
      const isMatch = bcrypt.compareSync(
        req.body.password,
        user.attributes.password
      );
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credentials." });
      }
      const token = jwt.sign(
        {
          id: user.id,
          email: user.attributes.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      res.status(201).json({ user, token });
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

  //Get Current User
  router.get("/current", authorize, (req, res) => {
    userModel
      .where({ id: req.decoded.id })
      .fetchAll()
      .then((user) => {
        const currentUser = { ...user.models[0].attributes, password: null };
        blogModel
          .where({ user_id: currentUser.id })
          .fetchAll()
          .then((blog) => {
            res.status(200).json({currentUser, blog});
          });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

//Update User
router.put("/current/:id",  (req, res) => {
  userModel
    .where({ id: req.params.id })
    .fetch()
    .then((user) => {
      const updates = Object.keys(req.body);
      updates.forEach((update) => (user.attributes[update] = req.body[update]));
      user
        .save(user.attributes)
        .then((updateUser) => res.status(200).json({ updateUser }));
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//Update User
router.delete("/current/:id",  (req, res) => {
  userModel
    .where({ id: req.params.id })
    .destroy()
    .then((deleteUser) => {
      res.status(200).json({ deleteUser });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
module.exports = router;
