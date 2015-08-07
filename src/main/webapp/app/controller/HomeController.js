Ext.define('Search.controller.HomeController', {
	extend : 'Ext.app.Controller',
	requires : [ 'Search.store.FileSystem', 'Search.model.FileDescription' ],

	/* our views which are handled by this controller */
	views : [ 'WestPane', 'FileSearchWindow' ],

	/* Stores and model for the views */
	models : [ 'FileDescription' ],
	stores : [ 'FileSystem' ],

	init : function() {
		console.log('Initializing controller');
		this.control({
			/* component query for Search button in west panel */
			'button[name=fileSearchButton]' : {
				click : this.showFileSearchWindow
			},

			/* component query for profile button in west panel */
			'button[name=bookSearchButton]' : {
				click : this.showBookSearchWindow
			},
			scope : this
		});
	},

	/* Luanch the window to search files */
	showFileSearchWindow : function() {
		console.log('window launching');
		var fileSearchWindow = Ext.create('Search.view.FileSearchWindow');
		fileSearchWindow.show();
	},

	/* Luanch the window to search books */
	showBookSearchWindow : function() {
		var bookSearchWindow = Ext.create('Search.view.BookSearchWindow');
		bookSearchWindow.show();
	}
});