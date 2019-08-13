//Up are the changes to make to the schema
exports.up = function(knex) {
	return knex.schema.createTable('fruits', tbl => {
		// Primary key, called id, autoincrements
		tbl.increments();
		tbl.string('name', 128).unique().notNullable();
        tbl.decimal('avg-weight-oz');
        
	});
};
// How we undo the changfes made in the up function
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fruits')
};
