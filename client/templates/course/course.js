Template.course.created = function () {
  // Get reference to template instance
  var instance = this;

  // Get reference to router
  var router = Router.current();

  // Get course ID from router
  instance.courseId = router.params._id;

  // Subscribe to single course
  instance.subscribe('singleCourse', instance.courseId);

  // Set the empty active lesson ID variable
  activeLessonID = new ReactiveVar(undefined);
  //set the empty active quiz Id variable... ReactiveVar.. like sessions
  activeQuizID = new ReactiveVar(undefined);
  //they will be defined when some clicks on the sidebar section..

};

Template.course.helpers({
  'course': function () {
    // Get reference to Template instance
    var instance = Template.instance();

    // Get current course
    var course = Courses.findOne(instance.courseId);

    return course;
  }
});

//Template events to cater for the hangout button...
Template.course.events({
  'click #hangoutButton': function(e, template){
    e.preventDefault();
     //console.log('hello hangout live classes r being called');
     var self = this;
    //remember the head.append('https://googleapi/v1/hangoutsapi.com');
     //get the array of the invites(clicked on that button)
     //i dnt know whether calling the users details from db directly z allowed..#security problem
     var user = Meteor.users.findOne(self.userId);
      console.log(user);
      //push the user to the array... i think u need to keep the array in session or ReactiveVar..

      //loading the google hangouts api library.. smooth way to make the http calls.
      //because it violates the following Content Security Policy directive
    //  $('head').append('<script src="https://apis.google.com/js/platform.js" async defer></script>');
       //render the google hangouts button...
       callGoogle();
       renderHangout();


  }

});

//define the function that calls the hangout api
function callGoogle(){
  //load the google hangout api gracefully.
  JQuery.ajax({
     url: 'https://apis.google.com/js/platform.js',
     dataType:'script',
     success: function(){
       console.log('success');
     },
     error: function(e){
       console.log('Error occurred');
     },
     async: true //defer..

  });
  return false
}

//define the function.... renderHangout.
function renderHangout(){
    gapi.hangout.render('hangout-div', {
      'render': 'createhangout',
      'hangout_type': 'moderated', //control enabled... choices-normal, party, onair.
      'initial_apps': [{'app_id' : '184219133185', 'start_data' : 'dQw4w9WgXcQ',
                   'app_type' : 'LOCAL_APP' }],
      'widget_size': '175'

    });
}
