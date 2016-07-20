Meteor.publish('lessons', function () {
    return Lessons.find();
});

Meteor.publish('singleLesson', function (lessonID) {
    return Lessons.find({"_id": lessonID});
});


//publication for the comments... use this later after sorting out publication.
Meteor.publish('comments' , function(lessonID){
	 //check(lessonID, string);
	return Comments.find({lessonID: lessonID});

});


/*Meteor.publish('comments', function(){
     return Comments.find({}); //refractor this part later
});  */

//publication for the notification..
Meteor.publish('notifications', function(){
    //return Notifications.find({});
    return Notifications.find({userId: this.userId, read: false});
});
