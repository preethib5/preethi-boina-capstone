const bookshelf = require('../bookshelf');
require("./blog")

const User = bookshelf.model('User', {
  tableName: 'users',
  blogs: function() {
   return this.hasMany("Blog","User_Id");
  },
});



module.exports = User;