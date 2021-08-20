
exports.up = function(knex) {
    return knex.schema.createTable("posts", function (table) {
        table.uuid("Id").primary();
        table.string("Title").notNullable();
        table.string("Content").notNullable();
        table.timestamp("CreatedDate").defaultTo(knex.fn.now());
        table.timestamp("UpdatedDate").defaultTo(knex.fn.now());
        //table.integer("User_Id").unsigned().notNullable();
        table
          .uuid("Blog_Id")
          .references("Id")
          .inTable("blogs")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });

  
};

exports.down = function(knex) {
    return knex.schema.dropTable("posts")
};
