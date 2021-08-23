exports.up = function (knex) {
  return knex.schema.createTable("blogs", function (table) {
    table.uuid("id").primary();
    table.string("description").notNullable();
    table.string("name").notNullable();
    //table.integer("User_Id").unsigned().notNullable();
    table
    .integer('user_id')
    .unsigned()
    .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("blogs")

};
