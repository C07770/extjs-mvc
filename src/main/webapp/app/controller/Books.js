Ext.define('Search.controller.Books', {
	extend : 'Ext.app.Controller',
	stores : [ 'Books' ],
	views : [ 'BooksList', 'BooksForm' ],
	refs : [ {
		ref : 'formWindows',
		xtype : 'booksform',
		selector : 'booksform',
		autoCreate : true
	} ],
	init : function() {
		this.control({
			'bookslist > toolbar > button[action=add]' : {
				click : this.showAddForm
			},
			'bookslist' : {
				itemdblclick : this.onRowdblclick
			},
			'booksform button[action=add]' : {
				click : this.doAddBook
			}
		});
	},
	onRowdblclick : function(me, record, item, index) {
		var win = this.getFormWindows();
		win.setTitle('Edit Book');
		win.setAction('edit');
		win.setRecordIndex(index);
		win.down('form').getForm().setValues(record.getData());
		win.show();
	},
	showAddForm : function() {
		var win = this.getFormWindows();
		win.setTitle('Add Book');
		win.setAction('add');
		win.down('form').getForm().reset();
		win.show();
	},
	doAddBook : function() {
		var win = this.getFormWindows();
		var store = this.getBooksStore();
		var values = win.down('form').getValues();
		var action = win.getAction();
		var url = '';
		if (action == 'edit') {
			url = '/api/book/updateBook';
		} else {
			url = '/api/book/save';
		}
		Ext.Ajax.request({
			url : url,
			method : 'POST',
			jsonData : values,
			success : function(response) {
				store.load();
			}
		});
		win.close();
	}
});
