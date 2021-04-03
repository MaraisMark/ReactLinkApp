exports.up = function (knex) {
  return knex.schema.createTable("links_tags", (table) => {
    table.increments();
    table.integer("link_id");
    table.integer("tag_id");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("links_tags");
};
