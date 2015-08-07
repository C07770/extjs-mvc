Ext.define('Search.store.FileSystem', {
	extend : 'Ext.data.Store',
	requires : [ 'Search.model.FileDescription' ],

	model : 'Search.model.FileDescription',
	autoLoad : true,

	proxy : {
		type : 'ajax',
		url : 'services/files',
		params : {
			fileName : 'fileName',
			baseLocation : null
		},

		reader : {
			type : 'json',
			root : 'array'
		}
	}
});