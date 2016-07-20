Lessons = new Mongo.Collection('lessons');

//Adding the schemas to the lesson.. so that they can be edited via dashboard.
LessonSchema = new SimpleSchema({
  "_id":{
		type:String,
		optional:false,
		unique: true
	}	,
	"name":{ //same as the title
		type: String,
		optional:false
	},
	"text":{
		type:String,
		optional:false
	}
});

Lessons.attachSchema(LessonSchema);

//Collection for the comments.
Comments = new Mongo.Collection('comments');

//Collection for notification system
//Notifications = new Mongo.Collection('notifications');

//cater for the security of  comments when adding it.
Meteor.methods({

	'commentInsert':function(commentAttributes){
   //validate the comments.
	 check(this.userId, String);
   check(commentAttributes,{
		    lessonID:String,
				body:String
	   });

	  //var user = Meteor.userId();//just get id of the user object.
		var user = Meteor.user();// obtain the whole user object..
	  //var lesson = Lessons.findOne({commentAttributes.lessonID});//SyntaxError: Unexpected token .
     var lesson = Lessons.findOne(commentAttributes.lessonID);

	 if (!lesson) {
		 throw new Meteor.Error('Invalid comment', 'you must comment on lesson ');
	 }
   comment = _.extend(commentAttributes, {
		  //userId: user,
			userId: user._id,//Meteor.userId();
		    author:user.username,
			submitted: new Date()
	});
	 //update lesson with the number of comments.
	 //Lesson.update(comment.lessonID, {$inc: commentCount});

	//create the comment, save the _id
	  comment._id =  Comments.insert(comment);
		// now create a notification, informing the user that there's been a comment
		 createCommentNotification(comment);
		return comment._id;
	}
});
