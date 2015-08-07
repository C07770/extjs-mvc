Ext.define('Search.view.LoginForm', {
	extend : 'Ext.window.Window',
	alias : 'wiget.loginform',
	title : 'User Login',
	width : 350,
	layout : 'fit',
	resizable : false,
	closeAction : 'hide',
	model : true,

	items : [ {
		xtype : 'form',
		layout : 'anchor',
		bodyStyle : {
			background : 'none',
			padding : '10px',
			border : '0'
		},
		defaults : {
			xtype : 'textfield',
			anchor : '100%',
			allowBlank : false,
			vtype : 'alphanum',
			minLength : 8,
			maxLength : 30
		},
		items : [ {
			fieldLabel : 'User Name',
			name : 'username'
		}, {
			fieldLabel : 'Password',
			name : 'password'
		} ]
	} ],

	buttons : [ {
		text : 'OK',
		action : 'login'
	}, {
		text : 'Cancel',
		handler : function() {
			this.up('window').close();
		}
	} ]
})