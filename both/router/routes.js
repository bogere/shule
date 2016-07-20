Router.route('/', {
    name: 'home'
});


Router.route('/dashboard'); // this one z different from /admin route.

Router.route('/teach');

Router.route('/learn');

//i doubt whether u need this routes once u have addded the

Router.route('/profile')

Router.route('/profileSettings');

Router.route('/settings');
//let me see...
//Router.route('/account'); //just added this from admin starter...

Router.route('tag/:tag',  {
    name: 'taggedCourses'
});

Router.route('course/:_id', {
    name: 'course'
});

Router.route('course/:_id/info', {
    name: 'courseInfo'
});

Router.route('/singleresourcepage', {
    name: 'testsingleResourcePage'
});

Router.route('/singleresourcepage/info', {
    name: 'testcourseInfo'
});

Router.route('license', {
  name: 'licenseQuestions'
});
