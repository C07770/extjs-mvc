Ext.define('Search.store.Books', {
	extend : 'Ext.data.Store',
	storeId : 'bookStore',
	model : 'Search.model.Book',

	autoLoad : true,
	remoteFilter : true,
	proxy : {
		type : 'ajax',
		url : '/api/book/loadBooks',
		reader : {
			type : 'json',
			root : 'books'
		}
	}
});