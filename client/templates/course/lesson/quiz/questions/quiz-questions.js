
Template.quizQuestions.helpers({
    questions: function(){
      if(!this.quiz) return;
      var id = this.quiz._id;

      var questions = Questions.find({"quizId":id}).fetch(); //getting directly frm db.
      return questions;

    }

});
