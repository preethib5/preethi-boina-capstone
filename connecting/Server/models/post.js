const bookshelf = require('../bookshelf');
require("./blog")

const Post = bookshelf.model('Post', {
  tableName: 'posts',
  blog: function () {
    return this.belongsTo('Blog');
  },
});

module.exports = Post;