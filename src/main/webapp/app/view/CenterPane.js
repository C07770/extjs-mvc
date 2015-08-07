Ext.define('Search.view.CenterPane', {
	extend : 'Ext.panel.Panel',
	xtype : 'center',

	requires : [ 'Search.view.BooksList' ],
	layout : 'column',
	items : [ {
		xtype : 'bookslist',
		columnWidth : 1,
		height : 300
	} ]
});