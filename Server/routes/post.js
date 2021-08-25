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

  router.get("/:id", (req, res) => {
    postModel.fetchAll().then((b) => {
      res.status(200).json(b);
    });
  });

  router.post("/:id", (req, res) => {
   new postModel({...req.body, id: Math.floor(Math.random() * 10000),blog_id: req.params.id})
   .save(null, { method: 'insert' })
   .then((newPost) => {
    res.status(201).json(newPost);
  })
  .catch((error) => res.status(400).json({ error: error.message }));
  });


  router.put("/:id", (req, res) => {
    postModel.where("id", req.params.id)
    .fetch()
    .then((post)=>{
        const updates = Object.keys(req.body);
        updates.forEach(
            (update) => (post.attributes[update] = req.body[update])
          );
          post.save(post.attributes)
          .then((updatedPost) => res.status(200).json({ updatedPost }));
    })
    .catch((error) => res.status(400).json({ error: error.message }));
   })
  
   router.delete("/:id", (req, res) => {
    console.log(req.body);
    postModel.where("id", req.params.id)
    .destroy()
    .then((deletepost)=>{
         res.status(200).json({ deletepost });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
   })
  


module.exports = router;