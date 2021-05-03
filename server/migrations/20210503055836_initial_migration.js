
exports.up = function(knex) {
    return knex.schema.createTable('monster', (table) => {
        table.increments().index();
        table.text('name');
        table.text('description');
        table.specificType('ailment', 'text[]');
        table.specificType('resistance', 'text[]');
        table.specificType('weakness', 'text[]')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('monster');
};
