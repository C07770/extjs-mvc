Ext.define('Search.view.BookSearchWindow', {
	extend : 'Ext.window.Window',
	requires : [ 'Search.store.BookSugg' ],

	layout : 'fit',
	minWidth : 250,
	closable : true,
	header : false,
	modal : true,
	config : {
		url : '/api/getbook/',
		searchType : 'title'
	},

	items : [ {
		xtype : 'combo',
		name : 'searchFiles',
		hideTrigger : true,
		typeAhead : false,
		trigerAction : 'all',
		queryMode : 'remote',
		minChars : 1,
		grow : true,
		emptyText : 'search books by title or author...',

		store : Ext.create('Search.store.BookSugg'),
		displayField : 'title_author',
		valueField : 'id',

		listeners : {
			change : function() {
				if (this.getRawValue() !== "") {
					this.store.proxy.url = this.up().getUrl()
							+ this.up().getSearchType() + '/'
							+ this.getRawValue();
				}
			},

			select : function() {
				console.log('selected [' + this.getValue() + ']');
			}

		}
	} ],

	tbar : {
		ui : 'footer',
		items : [ {
			xtype : 'radiogroup',
			fieldLabel : 'Search By',
			layout : 'hbox',
			items : [ {
				padding : '0 5 0 0',
				boxLabel : 'Title',
				name : 'rb',
				inputValue : 'title',
				checked : true
			}, {
				padding : '0 5 0 0',
				boxLabel : 'Author',
				name : 'rb',
				inputValue : 'author'
			} ],
			listeners : {
				change : function(field, newValue, oldValue) {
					this.up().up().setSearchType(newValue.rb);
				}
			}
		} ]
	}
});