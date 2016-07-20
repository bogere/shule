
//define the Collection
Notifications = new Mongo.Collection('notifications');

//check that user owns the specified document.
ownsDocument = function(userId, doc){
    return doc && doc.userId === userId;

}


//security .. allow/deny rules.
Notifications.allow({
  update: function(userId, doc, fieldNames){
    return ownsDocument(userId, doc) &&
     fieldNames.length === 1 && fieldNames[0] === 'read'; //refractor this.. look at chat.
     //coz i dont understand this code..
  }
});

//some refractoring of the above code
/*Notifications.allow({
  update: function(userId, doc){
    return doc && doc.userId === userId;
  }
}); */
//var user = Meteor.user(); //get the user object. //can only be used in method calls.
//var user = Meteor.users.findOne(this.userId); //same as var user = Meteor.user()

createCommentNotification = function(comment){
   //look for that lesson that holds that comment.
  var lesson = Lessons.findOne(comment.lessonID);
  //var user = Meteor.users.findOne(this.userId); // it z undefined...
   //console.log(user);  // it is undefined
  if (comment.userId!== lesson.userId ) { //inform him about comments made by others (insert in db)
    console.log('1st verification work');
    Notifications.insert({
        userId: lesson.userId,
       //userId: user._id,
      lessonID: lesson._id,
      commentId: comment._id,
      commenterName: comment.author,
      read:  false

      });
  }
};
