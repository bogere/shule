Template.teach.events({
    'change #courseCoverImage': function (event, template) {
        // Get the first file selected by the user
        // TODO: only allow the users to select one file
        // TODO: make sure the file is an image of allowed format (png, jpeg, webp)
        var image = event.target.files[0];

        // Insert the image into the database
        // getting the image ID for use in the course object
        var imageObject = Images.insert(image);

        // The image id is stored in the image object
        var imageId = imageObject._id;

        // Create a reactive var to be used when the course is added
        imageIdVar = new ReactiveVar(imageId);
        //assgn-- You can optionally make this code a bit cleaner by using a provided
        // utility method, FS.Utility.eachFile:
    },

    //refractor the image upload code.. so that it can enable display of the course images.
  /*  'change #courseCoverImage': function(event, template){
      //Error... FS.Collection.insert.. the file does not pass collection filters.
       //Uploading the file
       //Get the file selected by the user.... initiating the upload ...
     FS.Utility.eachFile(event, function(file){ //much cleaner code.
          var newFile = new FS.File(file);
          Images.insert(newFile, function(err, fileObj){
             if (err) {
               alert('Upload failed .....'+ err);

             } else {
               console.log('Uploaded completed successfully');

             }

          });
        // The image id is stored in the image object
          var imageId  = newFile._id;
          // Create a reactive var to be used when the course is added
          var imageIdVar = new ReactiveVar(imageId);

       });

    }, */
    'click #addCourse': function(event, template){
        // prevent default button submit
        event.preventDefault();
        var currentUsername = Meteor.user().username;
        // create an empty course container
        var course = {
            // Get form field values
            title: template.find('#courseTitle').value, // string

            // Cover Image ID comes from reactive var set in #courseCoverImage change event
            coverImageId: imageIdVar.get(),

            author: template.find('#authorName').value, // string
            keywords: template.find('#courseKeywords').value.split(','), // split keywords to array
            published: template.find('#coursePublished').value, // string
            about: template.find('#aboutText').value // Get the about text
        };

        // Add course to collection
        var courseId = Courses.insert(course);

        // Redirect to the course page
        Router.go( '/course/' + courseId );
    }
});

Template.teach.rendered = function() {
    // Get an array of the existing tags
    var tagOptions = Tags.find().fetch();

    $('#courseKeywords').selectize({
        delimiter: ',',
        persist: false,
        valueField: 'name',
        labelField: 'name',
        searchField: 'name',
        create: true,
        highlight: true,
        maxOptions: 5,
        options: tagOptions,
        onItemAdd: function (item) {
            // Check to see if tag exists in Tags collection
            // by querying the database for the tag name
            // and checking the length of the result
            var existingTag = Tags.find({"name": item}).fetch().length;
            if (!existingTag ) {
                // Add the tag to the Tags collection
                // TODO: figure out how to limit duplicate tags
                // e.g. 'Beans' and 'beans'
                // unless this is not an issue
                Tags.insert({"name": item});
            }
        }
    });
};
