Ext.define('Search.view.WestPane', {
	extend : 'Ext.panel.Panel',
	xtype : 'west',
	animCollapse : true,
	split : true,
	collapsible : true,
	minWidth : 60,

	items : [ {
		/* a group of button which will appear as menu */
		xtype : 'buttongroup',
		columns : 1,
		scale : 'large',
		grow : true,

		items : [ {
			name : 'fileSearchButton',
			cls : 'fileSearchButton',
			tooltip : 'Search Files',
			width : 40,
			height : 40
		}, {
			name : 'bookSearchButton',
			cls : 'bookSearchButton',
			tooltip : 'Search Books',
			width : 40,
			height : 40
		} ]
	} ]
});