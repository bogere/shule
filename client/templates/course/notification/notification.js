
Template.notifications.helpers({
   notifications: function(){
     return Notifications.find({userId:Meteor.userId(), read: false});
     //rememeber  ur notifications Collection... userId fault-- null..rectify that
   },
   notificationCount: function(){ //recall this when dealing with stats.
       return Notifications.find({userId:Meteor.userId(), read:false});
       //see this as duplicate... cant u clone object.count().
   }
});

Template.notificationItem.helpers({
   notificationLessonPath: function(){
     return Router.routes.lesson.path({_id: this.lessonID});
     //return Router.routes.postPage.path({_id: this.postId});  i think ur route z courseID..
     //return Router.go().. or u might do without it.. after click.. takes u to that comment.
   }
});

Template.notificationItem.events({
  'click a' : function(){
     return Notifications.update(this._id,{$set:{read: true}});
  }
});
