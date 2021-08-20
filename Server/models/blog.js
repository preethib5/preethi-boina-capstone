const bookshelf = require('../bookshelf');
require("./user")
require("./post")


const Blog = bookshelf.model('Blog', {
  tableName: 'blogs',
  user: function() {
    return this.belongsTo('User');
  },
  posts: function() {
    return this.hasMany('Post');
  },
});


module.exports = Blog;