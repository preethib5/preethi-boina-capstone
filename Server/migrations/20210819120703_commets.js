
exports.up = function(knex) {
    return knex.schema.createTable("comments", function (table) {
        table.uuid("Id").primary();
        table.string("Name").notNullable();
        table.string("Comment").notNullable();
        table.string("Likes").notNullable();
        table.timestamp("CreatedDate").defaultTo(knex.fn.now());
        table.timestamp("UpdatedDate").defaultTo(knex.fn.now());
        //table.integer("User_Id").unsigned().notNullable();
        table
          .uuid("Post_Id")
          .references("Id")
          .inTable("posts")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("comments")
};
