
//You need to define an AdminConfig object to use the admin dashboard.

AdminConfig = {
	name: "ShuleDash",
	nonAdminRedirectRoute:"entrySignIn",
	 adminEmails:['goldsoft25@gmail.com'],
	//A basic config to manage the 'Posts' and 'Comments' collection would look like this:
	collections:{
	  Questions:{

		},
		Lessons:{ // pliz replace the autoform template to custom WYSWYG template.
     icon:"pencil"
		 //adding custom template for the editable part..
		/* templates:{
			 new:{
				 name: 'postWYSIGEditor'
			 },
			 edit:{
				 name: 'postWYSIGEditor',
				 data: {
					 Lessons:Meteor.isClient && Session.get('admin_doc')
				 }
			 }
		 }  */
		},

		Comments:{
         icon: "comment",
         color:'green'

		}
	},

	dashboard:{
		homeUrl:'/dashboard'
	}
	//customising the look n feel of the dashboard...
	/*dashboard:{
		homeUrl:'/dashboard',
		widgets:[ // this z an array...
			{
			 template:"adminCollectionWidget",
			 data:{
				 collection: 'Lessons',
				 class: 'col-lg-3 col-xs-6'
			 }
			},
			{
				template: 'adminUserWidget',
				class :'col-lg-3 col-xs-6'
			}

		]
 //widgets is an array of objects specifying template names and data contexts. Make sure to specify the class in the data context.
 //If set, the widgets property will override the collection widgets which appear by default.

	}
  */

};
