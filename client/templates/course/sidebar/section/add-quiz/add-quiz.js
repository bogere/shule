
Template.addQuiz.created = function(){
    this.showInput = new ReactiveVar(false);

};

Template.addQuiz.helpers({
    showInput: function(){
      //return Template.instance.showInput.get();
      //error..Exception in template helper: TypeError: Cannot read property 'get' of undefined
     //  at String.Template.addQuiz.helpers.showInput
     return Template.instance().showInput.get();
    }
});

Template.addQuiz.events({

    'submit .add-new-quiz-form':function(event, instance){
       event.preventDefault(); //prevent page from refreshing.. like php jazz
       var quizTitle,// Title of new quiz, from template
           newQuizId,//ID of created quiz, returned from db insert
       // // Get the title of new section
      // quizTitle = instance.find('#quiz-title').value();//TypeError: instance.find(...).value is not a function
       quizTitle = instance.find('#quiz-title').value;
       var quizObj  = new Quiz();
       quizObj.title = quizTitle;
       quizObj.lessonID = Template.currentData();//current data is lessonID
       quizObj.questions = [];
       //insert new quiz in the database
       newQuizId = Quizzes.insert(quizObj);

       // Reset the value of section title field
      // $('#quiz-title').value(''); //Uncaught TypeError: $(...).value is not a function
      $('#quiz-title').val("");
       instance.showInput.set(false);

    },
    'click .sidebar-add-quiz-link': function(event, template){
       event.preventDefault();
       var currentShowInput =  template.showInput.get();
       //var newShowInput!= currentShowInput;//SyntaxError: missing ; before statement
       var newShowInput = !currentShowInput
       template.showInput.set(newShowInput);
    }
});
