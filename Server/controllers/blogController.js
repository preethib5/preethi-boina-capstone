const blogModel = require('../models/blog');


function getAllData(req, res) {
    const blogData = blogModel.getAllData();
    res.status(200).json(blogData);
  }
  
  module.exports = { getAllData };