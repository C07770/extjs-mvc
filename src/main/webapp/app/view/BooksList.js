Ext.define('Search.view.BooksList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.bookslist',
	title : 'Books List - (ExtJS SpringMVC example)',
	store : 'Books',

	requires : [ 'Search.view.SearchTrigger' ],

	initComponent : function() {
		this.tbar = [ {
			text : 'Add Book',
			action : 'add',
			iconCls : 'book-add'
		} ];
		this.columns = [
				{
					header : 'Title',
					dataIndex : 'title',
					flex : 1,
					items : [ {
						xtype : 'searchtrigger',
						autoSearch : true
					} ],
					renderer : function(value) {
						var param = value.split(' ').join('+');
						var link = '<a href="https://www.google.com/webhp?hl=en#hl=en&q={0}" target="_blank">{1}</a>';
						return Ext.String.format(link, param, value);
					}
				},
				{
					header : 'Author',
					dataIndex : 'author',
					items : [ {
						xtype : 'searchtrigger',
						autoSearch : true
					} ]
				},
				{
					header : 'Price',
					dataIndex : 'price',
					width : 100
				},
				{
					header : 'Quantity',
					dataIndex : 'qty',
					width : 80
				},
				{
					text : '',
					xtype : 'actioncolumn',
					width : 20,
					items : [ {
						icon : 'resources/images/trash-icon.png',
						tooltip : 'Delete',
						handler : function(grid, rowIndex, colIndex) {
							var book = JSON.stringify(grid.getStore().getAt(
									rowIndex).data);
							Ext.Msg.confirm('Remove Book',
									'Are you sure you want to delete?',
									function(button) {
										if (button == 'yes') {
											Ext.Ajax.request({
												url : '/api/book/delete',
												method : 'POST',
												jsonData : book,
												success : function(response) {
													grid.getStore().load();
												}
											});
										}
									});
						}
					} ]
				} ];
		this.callParent(arguments);
	}
});