exports.up = function (knex) {
  return knex.schema.createTable("blogs", function (table) {
    table.uuid("Id").primary();
    table.string("Description").notNullable();
    table.string("Name").notNullable();
    //table.integer("User_Id").unsigned().notNullable();
    table
      .uuid("User_Id")
      .references("Id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("blogs")

};
