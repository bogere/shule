// Create images filestore
var imageFilesystemStorage = new FS.Store.FileSystem("images");
//var imageFilesystemStorage = new FS.Store.FileSystem("images", {path: "-/uploads"});

// Create images collection
Images = new FS.Collection("images", {
    stores: [imageFilesystemStorage],
    //filter the kinds of files to be uploaded.
    filter:{
      allow: {
        contentTypes : ['image/*'] //add the pdf, ppt, docx n excel
        //audio/*" and "video/*" like the "accepts" attribute on the HTML5 file input element.
        //extensions: ['png'] //do this later... stop different kinds of images.
      },
    //}
    //feedback.
   onInvalid: function(message){
       if (Meteor.isClient) {
         alert(message); //use alert package..

       } else {
         console.log(message);
       }

    }
  }
});
//); //debugging process.

//An FS.Collection provides a collection in which information about files can be stored

//To allow users to submit files to the FS Collection, you must create an allow rule in Server code:

if (Meteor.isServer) {

  Images.allow({
    insert: function(){
      return true;
    },
    update: function(){
      return true;
    }
  });

}
