
Template.commentSubmit.events({
     'submit .form': function(e, template){
        e.preventDefault();
        //capture the body of the comment.
        var $body = $(e.target).find('[name= body]');
        //or var $body = document.getElementById('body'.val();
      var comment = {
        body: $body.val(),
        lessonID: template.data._id
      };
    //what about the errors... look at microX
  /*  var errors = {};
       if (!comment.body) {
         error.body = "please write some content";
         //return Session.set('commentSubmitErrors', errors); or use alert for error.
       } */
   //insert the comment in db
   Meteor.call('commentInsert', comment, function(error,commentId){
       if (error) {
         //throw new Meteor.Error(error.reason);
         throw new Meteor.Error('something went wrong');
       } else {
         $body.val('');
       }

   });

 }

});
