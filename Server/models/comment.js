const bookshelf = require('../bookshelf');
require("./post")


const Comment = bookshelf.model('Comment', {
    tableName: 'comments',
    post: function () {
      return this.belongsTo('Post');
    },
   
});


module.exports = Comment;