

//only allow the owner of the course to edit the course-- display edit button
Template.editCourse.helpers({
  'isOwner': function(event, template){
     //Get the reference to Router.
     //var router = Router.current().route.getName(); //name of route.
       var router = Router.current();
       //Get the course ID from router.
       var courseId = router.params._id;
       //test whether he is owner of the course.
         //return this.user == Meteor.userId();//person log
        // var user =   Meteor.users.findOne({_id : userId});

         //sln::Exception in template helper: ReferenceError: courses is not defined
         var course = Courses.findOne({_id: courseId});
          //  console.log(course);
           return course.createdById == Meteor.userId();

  }
});






Template.editCourse.events({
  'click #edit-course':function(event, template){
    // Get reference to Router
    var router = Router.current();

    // Get Course ID from router
    var courseId = router.params._id;

    // set editing course session variable to this course id
    Session.set('editingCourseId', courseId);
  }
});
