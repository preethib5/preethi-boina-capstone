const express = require("express");
const router = require("express").Router();
const app = express();
const blogModel = require("../models/blog");
const userModel = require("../models/user");
const postModel = require("../models/post");
//const users = require("../seeds/seeds_data/users");

//const {getAllData} = require("../controllers/blogController")

// GET /members route
//router.get("/bookshel7f/blog", getAllData);

router.get("/bookshelf/blogs/", (req, res) => {
  blogModel.fetchAll().then((b) => {
    res.status(200).json(b);
  });
});

// router.get("/bookshelf/blogs/:id", (req, res) => {
//   userModel.where({id: req.params.id})
//   .fetchAll()
//   .then((user) => {
//     blogModel.where({User_Id: req.params.id}).fetchAll().then((blog) => {
//       res.json({...user.models[0].attributes, "blogs": blog})
//     })
//   }).catch((e) => {res.json(e.message)});
// });

// router.get("/bookshelf/blogs/:id", (req, res) => {
//   blogModel.where({id: req.params.id})
//     .fetchAll()
//     .then((blog) => {
//       postModel.where({Blog_Id: req.params.id}).fetchAll().then((post) => {
//         res.json({...blog.models[0].attributes, "posts": post})
//       })
//     }).catch((e) => {res.json(e.message)});
//   });

router.get("/:id", (req, res) => {
  userModel
   // .where({ id: req.params.id })
    .fetchAll()
    .then((user) => {
      blogModel
        .where({ User_Id: req.params.id })
        .fetchAll()
        .then((blog) => {
          postModel
          .where({ Blog_Id: req.params.id })
          .fetchAll()
          .then((post)=>{
            res.json({...user.models[0].attributes,"blogs": blog,"posts": post})
          })
        });
    });
});

module.exports = router;
