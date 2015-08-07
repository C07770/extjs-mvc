Ext.define('Search.view.Viewport', {
	extend : 'Ext.container.Viewport',
	requires : [
	/* below are views of this application */
	'Search.view.WestPane', 'Search.view.CenterPane' ],

	layout : 'border',

	items : [ {
		/* dock in West */
		region : 'west',
		/* This is custom panel */
		xtype : 'west',
		width : 50
	}, {
		/* dock in center */
		region : 'center',
		/* this is custom panel */
		xtype : 'center'
	} ]
});