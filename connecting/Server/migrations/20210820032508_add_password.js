
exports.up = function(knex) {
  return knex.schema.table("users",(table)=>{
      table.string("Password").notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.table('users', (table) => {
        table.dropColumn('Password');
      });
};
