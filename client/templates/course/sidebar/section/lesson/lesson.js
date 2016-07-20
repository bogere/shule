Template.sectionLesson.created = function () {
  // Save lesson ID as instance variable
  this.lessonID = this.data;
  //when debugging ur Auto Form
  //AutoForm.debug();

  // Subscribe to single section lesson
  this.subscribe('singleLesson', this.lessonID);
  //subscribe to the comments of that  specific lesson...
  this.subscribe('comments',  this.lessonID);
  //quizzes n questions
  this.subscribe('quizzes'); //what about the singleQuiz publication
  this.subscribe('questions');
};

Template.sectionLesson.helpers({
  'editingThisCourse': function (event, template) {
    // Get reference to current router
    var router = Router.current();

    // Get Course ID from router
    var currentCourseId = router.params._id;

    // Get value of editing course session variable
    var editingCourseId = Session.get('editingCourseId')

    // See if user is editing current course
    var editingCurrentCourse = (editingCourseId === currentCourseId);

    // return true if user is editing this course
    return editingCurrentCourse;
  },
  'lesson': function () {
    // Get template instance as variable
    var instance = Template.instance();

    // Get lesson ID from template instance
    var lessonID = instance.lessonID;

    // Get lesson object from database
    var lessonObject = Lessons.findOne(lessonID);

    return lessonObject; // same as return lesson
  },
  // i dont know whether ... over kill or .. coz comments were working without this.
  /*'comments': function(){ // may be when refracting for performance issues , then just consider the above.

  } */

  //for the quizzes
  'quizzes': function(){
    //Get the template instance
    var instance = Template.instance();
    //Get the lessonID from template instance
    var lessonID = instance.lessonID;
    //Get the quiz object from the database.
    var quizzes = Quizzes.find({lessonID:lessonID}).fetch();

    return quizzes; //or quizObject.

  }


});

Template.sectionLesson.events({
  'click .sidebar-lesson-link': function (event) {
    event.preventDefault();

    // Get lesson ID variable from data context
    var lessonID = String(this);

    // set active lesson ID reactive variable
    // to the value of clicked lesson
    activeLessonID.set(lessonID);

    //TODO[EM] temporary code-- deactive the quiz reactive variable
    //activeQuizID.set(undefined); //where r u settiing the reactiveVar
     //activeQuizID.set(quizId) //or quizID
  }
});
