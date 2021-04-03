exports.up = function (knex) {
  return knex.schema.createTable("links", (table) => {
    table.increments();
    table.integer("user_id");
    table.string("name");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("links");
};
