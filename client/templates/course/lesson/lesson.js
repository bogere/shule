Template.lesson.helpers({
  'activeLesson': function () {
    // Get the lesson ID from reactive var
    var lessonID = activeLessonID.get();

    // Get the lesson from DB
    var lesson = Lessons.findOne({_id: lessonID});

    return lesson;
  },
  //for the comments part.
  'comments': function(){
  	 return Comments.find({lessonID: this._id});
    //return Comments.find({lessonID: lessonID});
  },
  //debugging the data context.
   'log': function(){
     console.log(this);
   }
});
