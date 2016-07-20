
Meteor.publish('questions', function(){
  return Questions.find();
});

Meteor.publish('quizzes', function(){
  return Quizzes.find();
});

Meteor.publish('singleQuiz', function(QuizID){ //what about quizId..
  return Quizzes.find({_id: QuizID});
});
