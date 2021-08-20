const userData = require("./seeds_data/users")
// const bcrypt = require("bcryptjs")

// function hashPassword(password){
//   const salt = bcrypt.genSaltSync();
//   return bcrypt.hashSync(password,salt)
// }

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(userData);
    });
};
