Ext.define('Search.store.BookSugg', {
	extend : 'Ext.data.Store',
	requires : [ 'Search.model.Book' ],

	model : 'Search.model.Book',
	autoLoad : false,

	proxy : {
		type : 'ajax',
		url : '',
		reader : {
			type : 'json',
			root : 'books'
		}
	}
});