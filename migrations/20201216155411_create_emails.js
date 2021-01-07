
exports.up = function(knex) {
    return knex.schema.createTable("emails", table => {
        table.increments("id");
        table.string("sender");
        table.string("recipient");
        table.string("subject");
        table.string("message");
        table.timestamp("date").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("emails");
};
