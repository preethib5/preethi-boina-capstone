const blogData = require("./seeds_data/blogs")
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert(blogData);
    });
};
