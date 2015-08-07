Ext.application({
	name : 'Search',
	appFolder : 'app',

	/*
	 * this will search for a file 'search/view/Viewport.js' where search is the
	 * name of this application
	 */
	autoCreateViewport : true,

	/* For this example I have one Controller */
	controllers : [ 'HomeController', 'Books' ]
});
