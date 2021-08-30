const express = require("express");
const router = require("express").Router();
const blogModel = require("../models/blog");
const userModel = require("../models/user");
const postModel = require("../models/post");
const commentModel = require("../models/comment");

const faker = require("faker");

router.get("/", (req, res) => {
  commentModel.fetchAll().then((b) => {
    res.status(200).json(b);
  });
});

router.get("/:blogid/:postid", (req, res) => {
  userModel
   // .where({ id: req.params.blogid })
    .fetchAll()
    .then((user) => {
      blogModel
        .where({ id: req.params.blogid })
        .fetch()
        .then((blog) => {
          postModel
            .where({ id: req.params.postid })
            .fetch()
            .then((post) => {
              commentModel
                .where((qb) => {
                  qb.where({ blog_id: req.params.blogid }).andWhere({
                    post_id: req.params.postid,
                  });
                })
                .query((qb) => {
                  qb.orderBy(1, "DESC");
                })
                .fetchAll()
                .then((comment) => {
                  res.json({
                    posts: post,
                    blog: blog,
                    user: user,
                    comments: comment,
                  });
                });
            });
        });
    });
});

router.post("/:blogid/:postid", (req, res) => {
  new commentModel({
    image: "https://www.patrioticretirementclub.com/wp-content/uploads/2021/08/hawaii-governor-02.jpg",
    likes: 5,
    name: req.body.name,
    comment: req.body.comment,
    image:faker.image.avatar(),
    id: Math.floor(Math.random() * 10000),
    post_id: req.params.postid,
    blog_id: req.params.blogid,
  })
    .save(null, { method: "insert" })
    .then((newComment) => {
      res.status(201).json(newComment);
    })
    .catch((error) => res.status(400).json({ error: error.message }));
});

router.delete("/:blogid/:postid/:commentid", (req, res) => {
    commentModel
    .where((qb) => {
      qb.where({ blog_id: req.params.blogid }).andWhere({
        id: req.params.postid,id: req.params.commentid
      });
    })
    .destroy()
    .then((deletepost) => {
      res.status(200).json({ deletepost });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
  });

  router.put("/:blogid/:postid/:commentid", (req, res) => {
    commentModel
    .where((qb) => {
      qb.where({ blog_id: req.params.blogid }).andWhere({
        id: req.params.postid,id: req.params.commentid
      });
    })
    .fetch()
    .then((comment) => {
        const updates = Object.keys(req.body);
      updates.forEach((update) => (comment.attributes[update] = req.body[update]));
      comment
        .save(comment.attributes)
        .then((updatedLike) => res.status(200).json({ updatedLike }));
    })
    .catch((error) => res.status(500).json({ error: error.message }));
  });

module.exports = router;
