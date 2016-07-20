CourseController = AppController.extend({
    waitOn: function() {
        // course ID
        var courseID = this.params._id;
        //lessonID
        //var lessonID = this.params._id; // u could repeat the same for lessonID.


        // Course subscriptions
        return [
             // Wait for the course to be available
            this.subscribe("singleCourse", courseID),
            //i think u subscribe to the comments as well
            //this.subscribe("comments", lessonID)
        ];
    },
    data: function () {
        // Return the course
        return Courses.findOne();
    },
    onAfterAction: function () {
        // Get the course ID from the URL parameters
        var courseID = this.params._id;

        // TODO: uncomment the following and figure out why it is generating a browser console error

        // Get the course from the database
        //var course  = Courses.find(courseID).fetch()[0]; // select the zeroeth array item

        // Set the site title for SEO
        //Meta.setTitle(course.title);
    }
});
