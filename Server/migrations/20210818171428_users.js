
exports.up = function(knex) {
    return knex.schema.createTable("users", function(table){
        table.increments("id").primary();
        table.string("firstName").notNullable();
        table.string("lastName").notNullable();
        table.string("email").notNullable();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
