Meteor.publish('images', function () {
    return Images.find();
});

//how about implementing a limit so that client does not download all images in one single shot
/*Meteor.publish('images', function(){
  check(limit, Number);
  return Images.find({}, {
    limit:limit  // userId... each user subscribes to only images n category
  })

}); */



Meteor.publish('courseCoverImage', function (courseId) {
    // Get the course object from course ID parameter
    var courseObject = Courses.findOne(courseId);
     // is it same as Courses.findOne({_id: courseId});

    // Get image ID from course object
    var coverImageId = courseObject.coverImageId;

    // Find the course cover image and return it
    return Images.find(coverImageId);
    //u will need to revise this part...
});
