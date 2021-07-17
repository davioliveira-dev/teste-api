exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.uuid('id');
  table.string('login');
  table.string('password');
});

exports.down = (knex) => knex.schema.dropTable('users');
