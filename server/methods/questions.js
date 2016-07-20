
Meteor.methods({
  'addQuestion': function(question, params){
      return  Questions.insert(question);
  },

  'addSingleAnswerQuestion': function(question, params){
       return Questions.insert(question);

  },
  'removeQuestion': function(question){
       return Questions.remove({"id": question.id});

  }
});
