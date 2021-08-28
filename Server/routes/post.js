const express = require("express");
const router = require("express").Router();
const blogModel = require("../models/blog");
const userModel = require("../models/user");
const postModel = require("../models/post");

router.get("/", (req, res) => {
  postModel.fetchAll().then((b) => {
    res.status(200).json(b);
  });
});

// router.get("/:id", (req, res) => {
//   postModel
//     .where({ blog_id: req.params.id })
//     .fetch()
//     .then((b) => {
//       res.status(200).json(b);
//     });
// });
// router.get("/posts/:id", (req, res) => {
//   postModel
//     .where({ blog_id: req.params.id })
//     .fetch()
//     .then((b) => {
//       res.status(200).json(b);
//     });
// });

router.get("/:blogid/:postid", (req, res) => {
  blogModel
    .where({ id: req.params.blogid })
    .fetch()
    .then((blog) => {
      postModel
        .where((qb) => {
          qb.where({ blog_id: req.params.blogid }).andWhere({
            id: req.params.postid,
          });
        })
        .fetch()
        .then((post) => {
          res.json({ ...blog.attributes, posts: post });
        });
    })
    .catch((e) => {
      res.json(e.message);
    });
});
router.get("/:id", (req, res) => {
  blogModel
    .where({ id: req.params.id })
    .fetch()
    .then((blog) => {
      postModel
        .where({ blog_id: req.params.id })
        .fetchAll()
        .then((post) => {
          res.json({ ...blog.attributes, posts: post });
        });
    })
    .catch((e) => {
      res.json(e.message);
    });
});

// router.get("/:id", (req, res) => {
//   postModel.where({ blog_id: req.params.id }).fetchAll().then((b) => {
//     res.status(200).json(b);
//   });
// });

router.post("/:id", (req, res) => {
  new postModel({
    ...req.body,
    id: Math.floor(Math.random() * 10000),
    blog_id: req.params.id,
  })
    .save(null, { method: "insert" })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((error) => res.status(400).json({ error: error.message }));
});

router.put("/:blogid/:postid", (req, res) => {
  postModel
    .where((qb) => {
      qb.where({ blog_id: req.params.blogid }).andWhere({
        id: req.params.postid,
      });
    })
    .fetch()
    .then((post) => {
      const updates = Object.keys(req.body);
      updates.forEach((update) => (post.attributes[update] = req.body[update]));
      post
        .save(post.attributes)
        .then((updatedPost) => res.status(200).json({ updatedPost }));
    })
    .catch((error) => res.status(400).json({ error: error.message }));
});

router.delete("/:blogid/:postid", (req, res) => {
  postModel
    .where((qb) => {
      qb.where({ blog_id: req.params.blogid }).andWhere({
        id: req.params.postid,
      });
    })
    .destroy()
    .then((deletepost) => {
      console.log(deletepost);
      // postModel.fetchAll().then((posts) => {
      //   res.status(200).json(posts);
      // });
      res.status(200).json({ deletepost });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});

module.exports = router;
