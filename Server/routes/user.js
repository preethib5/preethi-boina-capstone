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

// router.get("/bookshelf/users/:id", (req, res) => {
//   console.log(1)
//   userModel
//     .where({ id: req.params.id })
//     .fetch({withRelated: {
//       blogs: function(qb) {
//         qb.select();qb.orderBy("columnName","asc")
//       }
//     }})
//     .then((users) => {
//       res.status(200).json(users);
//     }).catch(err => res.status(400).json({error: err.message}));
// });

router.get("/bookshelf/users/:id", (req, res) => {
  userModel
    .where({ id: req.params.id })
    .fetchAll()
    .then((users) => {
      blogModel
        .where({ User_Id: req.params.id })
        .fetchAll()
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
          //console.log(user)
          const token = jwt.sign(
            { id: user.id, email: user.attributes.email },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
          );
        // console.log(token)
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
      //console.log(user.attributes)
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
       // console.log(user.attributes)
        const currentUser = { ...user.models[0].attributes, password: null };
      //  console.log(currentUser)
        blogModel
          .where({ user_id: currentUser.id })
          .fetchAll()
          .then((blog) => {
            res.status(200).json({currentUser, blog});
           // console.log(currentUser)
          });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

module.exports = router;
