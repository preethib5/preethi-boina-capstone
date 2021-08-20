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
//         qb.select();
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

//Get Current User
router.get("/current", authorize, (req, res) => {
  userModel
    .where({ Id: req.decoded.Id })
    .fetchAll()
    .then((user) => {
      const currentUser = { ...user.attributes, Password: null };
      blogModel
        .where({ User_Id: currentUser.Id })
        .fetchAll()
        .then((blog) => {
          res.status(200).json(currentUser, blog);
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//Login User
router.post("/login", async (req, res) => {
  userModel
    .where({ Email: req.body.Email })
    .fetch()
    .then((user) => {
      const isMatch = bcrypt.compareSync(
        //req.body.Password,
        user.attributes.Password
      );
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credentials." });
      }
      const token = jwt.sign(
        {
          Id: user.Id,
          Email: user.attributes.Email,
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

// //CREATE new user
// router.post("/", (req, res) => {
//   const { Password } = req.body;
//   bcrypt.hash(Password, 8).then((hashedPassword) => {
//     new userModel({ ...req.body, Password: hashedPassword })
//       .save()
//       .then((user) => {
//         console.log("Hi")
//         const token = jwt.sign(
//           { Id: user.Id, Email: user.attributes.Email },
//           process.env.JWT_SECRET,
//           { expiresIn: "24h" }
        
//         );
//         console.log(token)
//         res.status(201).json({ user });
//       })
      
//   })
//   .catch((err) => {
//     res.status(400).send({ error: err.message });
//   });
//   //console.log(user)
// });

router.post("/", (req, res) => {
  const { Password } = req.body;
  bcrypt
    .hash(Password, 8)
    .then((hashedPassword) => {
      userModel.forge({ ...req.body, Password: hashedPassword })
        .save(null,{method:"insert"})
        .then(user=>console.log(user))
        // .then((user) => {
        //   console.log(user)
        //   // const token = jwt.sign(
        //   //   { Id: user.Id, Email: user.attributes.Email },
        //   //   process.env.JWT_SECRET,
        //   //   { expiresIn: "24h" }
        //   // );
        // //  console.log(token)
        //   res.status(201).json(" user, token" );
        // })
         .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
   
  });
module.exports = router;
