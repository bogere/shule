
Quizzes = new Mongo.Collection('quizzes');

//i shall have to  use this to extend the QuestionSchema.
QuizzesSchema.AnswerOptionSchema = new SimpleSchema({
    title: {
        type:String,
        optional: true,
        defaultValue: ""
    },
    isCorrect: {
        type: Boolean,
        defaultValue: false
    },
});

//This schema will validate the initial creation of a quiz
QuizzesSchema.QuizzesSchema = new SimpleSchema({
//QuizzesSchema = new SimpleSchema({
    title: {
        type:String,
        label: "Quiz Title",
        min: 4,
        max: 140
    },
    questions: {
        type: [Object],
        optional: true
    },

    lessonID: {
        type:String,
    },
  //catering for the AnswerOptionSchema.
/*  AnswerOption : { //or use the ._extend(AnswerOption);  on the QuizzesSchema
    //Error: Invalid definition for AnswerOption field
     title: {
       type: String,
       optional: true,
       defaultValue: ""
     },
      isCorrect: {
        type: Boolean,
        defaultValue:false
      }
  }  */
});

Quizzes.attachSchema(QuizzesSchema.QuizzesSchema);
// i think it is better to use Quizzes.attachSchema(QuizzesSchema.AnswerOptionSchema);
//Quizzes.attachSchema(QuizzesSchema);
