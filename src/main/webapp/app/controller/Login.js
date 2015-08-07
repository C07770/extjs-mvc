Ext.define('Search.controller.Login', {
	extend : 'Ext.app.Controller',

	view : [ 'LoginForm' ],

	init : function(appliction) {
		this.control({
			'loginform button[action=login]' : {
				click : this.authenticate
			}
		});
	},

	authenticate : function(me) {
		var win = me.up();
		var loginform = win.down('form');
		var credentials = loginform.getRecord();

		if (loginform.isValid()) {
			Ext.Ajax.request({
				url : '/login/authenticate',
				method : 'POST',
				param : {
					username : credentials.username,
					password : credentials.password
				},
				success : function(conn, response, options, eOpts) {
					var res = Ext.JSON.decode(conn.responseText, true);
					if (res.status) {
						win.close();
					} else {
						Ext.Msg.show({
							title : 'Login Failed',
							msg : res.message,
							icon : Ext.Msg.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				},
				failure : function(conn, response, options, eOpts) {
					Ext.Msg.show({
						title : 'Server Error',
						msg : conn.responseText,
						icon : Ext.Msg.ERROR,
						buttons : Ext.Msg.OK
					});
				}
			});
		}
	}
})