
exports.up = function(knex) {
    return knex.schema.createTable("comments", function (table) {
        table.uuid("id").primary();
        table.string("name").notNullable();
        table.string("comment").notNullable();
        table.integer("likes");
        table.string("image");
        table.timestamp("createdDate").defaultTo(knex.fn.now());
        table.timestamp("updatedDate").defaultTo(knex.fn.now());
        //table.integer("User_Id").unsigned().notNullable();
        table
          .uuid("post_id")
          .references("id")
          .inTable("posts")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
          table
          .uuid("blog_id")
          .references("id")
          .inTable("blogs")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("comments")
};
