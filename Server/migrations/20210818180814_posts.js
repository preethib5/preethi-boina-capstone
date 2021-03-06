


exports.up = function(knex) {
    return knex.schema.createTable("posts", function (table) {
        table.uuid("id").primary();
        table.string("title").notNullable();
        table.text("content").notNullable();
        table.string("image").notNullable();
        table.string("author").notNullable();
        table.datetime("createdDate").defaultTo(knex.fn.now());
        table.datetime("updatedDate").defaultTo(knex.fn.now());
        //table.integer("User_Id").unsigned().notNullable();
        table
          .uuid("blog_id")
          .references("id")
          .inTable("blogs")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });

  
};

exports.down = function(knex) {
    return knex.schema.dropTable("posts")
};
