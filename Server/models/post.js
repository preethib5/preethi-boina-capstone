const bookshelf = require('../bookshelf');
require("./blog")
require("./comment")

const Post = bookshelf.model('Post', {
  tableName: 'posts',
  blog: function () {
    return this.belongsTo('Blog');
  },
  comments: function() {
    return this.hasMany('Comment');
  },
});

module.exports = Post;