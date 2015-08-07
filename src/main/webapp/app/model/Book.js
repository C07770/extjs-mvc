Ext.define('Search.model.Book', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'title',
		type : 'string'
	}, {
		name : 'author',
		type : 'string'
	}, {
		name : 'price',
		type : 'int'
	}, {
		name : 'qty',
		type : 'int'
	}, {
		name : 'title_author',
		type : 'string',
		convert : function(v, record) {
			return record.get('title') + " (" + record.get('author') + ")";
		}
	} ]
});
