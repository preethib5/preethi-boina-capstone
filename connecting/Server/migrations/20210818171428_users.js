
exports.up = function(knex) {
    return knex.schema.createTable("users", function(table){
        table.uuid("Id").primary();
        table.string("FirstName").notNullable();
        table.string("LastName").notNullable();
        table.string("Email").notNullable();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
