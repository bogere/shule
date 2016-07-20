AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
  //i would love to subscribe to the notification here
  waitOn: function(){
    return Meteor.subscribe('notifications');// this  subscription z still at large.
  }   //what do u think about performance issues.
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});
