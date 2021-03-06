
/*this code.. i borrowed it... they r defining functions as objects.
//thought of changing this to collection helpers..
//when dealing with JS .... dont reinvent anything... just build on already.
special thanx to people at Crowducate for this informative code.
//cant I do without this stuff... u need massive refractoring of the code*/
Quiz = function(){
    var quiz = this;
    this.addNewQuestion = function(val){
        //check if the question already exists
        if (quiz.questions == undefined){
            quiz.questions = [];
        }
        for (var q in quiz.questions){

        };

        quiz.questions.push(val);
    };

};
Quiz.convertToQuizObject = function(object){

    if (object == undefined) return;
    var quiz = new Quiz();
    quiz._id = object._id;
    quiz.title = object.title;
    quiz.lessonID = object.lessonID;
    quiz.questions = object.questions;
    quiz.userAttempts = object.userAttempts;

    return quiz;
};
Quiz.generateQuestion = function(questionType, quizId ){
    var question = new Object();
    question.quizId = quizId;
    question.id = Random.id(); //assign an id to the question - need this for checking and validating answers
    question.questionType = questionType;

    //if the question type is true-or-false, populate the answer options
    if (question.questionType == QuizOptions.TRUE_OR_FALSE){
        question.optionTitles = [];
        var trueOption = Quiz.generateAnswerOption("True", false, 0);

        question.optionTitles.push(trueOption);
        var falseOption = Quiz.generateAnswerOption("False", false, 1);
        question.optionTitles.push(falseOption);
    };

    question.description = "";
    question.title = "";
    question.options = [];
    return question;
};
Quiz.generateAnswerOption = function (title, isSelected, index){
    var option = {};
    option.title = title;
    option.isSelected = isSelected;
    option.index = index;

    return option
}
Object.defineProperty(Quiz, "_title", {
    get: function title(){
        return this._title;
    },
    set: function title(val){
        this._title = val;
    }
});
Object.defineProperty(Quiz, "_questions", {
    get: function question(){
        return this._questions;
    },
    set: function questions(val){
        this._questions = val;
    }
});

Object.defineProperty(Quiz, "_lessonID", {
    get: function lessonID(){
        return this._lessonIDs
    },
    set: function lessonID(val){
        this._lessonID = val;
    }
});

Object.defineProperty(Quiz, "_userAttempts", { //an array of objects containig user ids, date and result
    get: function userAttempts(){
        return this._userAttempts;
    },
    set: function userAttempts(val){
        this._userAttempts = val;
    }
})
QuizOptions = {};

QuizOptions.MULTIPLE_CHOICE_SINGLE_ANSWER = "Multiple Choice - single answer";
QuizOptions.MULTIPLE_CHOICE_MULTIPLE_ANSWERS = "Multiple Choice - multiple answers";
QuizOptions.TRUE_OR_FALSE = "True or False";
QuizOptions.QUESTION_TYPES =
    [  QuizOptions.MULTIPLE_CHOICE_SINGLE_ANSWER,
        QuizOptions.MULTIPLE_CHOICE_MULTIPLE_ANSWERS,
        QuizOptions.TRUE_OR_FALSE
    ];
    
QuizQuestion = function() {};
Object.defineProperty(QuizQuestion, "_questionType", {
    get: function questionType() {
        return this._quiztype;
    },
    set: function questionType(val) {
        this._quiztype = val;
    }
});

//recall the OOP javascript..
//array of lesson IDs - the quiz can be used in more than one lesson
Object.defineProperty(QuizQuestion, "_quizId", {
    get: function quizId(){
        return this._quizId
    },
    set: function quizId(val){
        this._lessonIDs = val;
    }
});

Object.defineProperty(QuizQuestion, "_title", {
    get: function title(){
        return this._title;
    },
    set: function title(val){
        this._title = val;
    }
});

Object.defineProperty(QuizQuestion, "_description", {
    get: function description(){
        return this._description;
    },
    set: function description(val){
        this._description = val;
    }
});

Object.defineProperty(QuizQuestion, "_options", {
    get: function options(){
        return this._options;
    },
    set: function options(val){
        this._questions = val;
    }
});

Object.defineProperty(QuizQuestion, "_saved",{
    get: function saved(){
        return this._saved;
    },
    set: function saved(val){
        this._saved = val;
    }
});

Object.defineProperty(QuizQuestion, "_answered", {
    get: function answered(){
        return this._answered;
    },
    set: function answered(val){
        this._answered = val;
    }
})

Object.defineProperty(QuizQuestion, "_isMultipleAnswer", {
    get: function isMultipleAnswer(){
        return this._questionType == QuizOptions.MULTIPLE_CHOICE_MULTIPLE_ANSWERS;
    }
});

Object.defineProperty(QuizQuestion, "_isSingleAnswer", {
    get: function isSingleAnswer(){
        return this._questionType == QuizOptions.MULTIPLE_CHOICE_SINGLE_ANSWER;
    }
});

Object.defineProperty(QuizQuestion, "_isTrueOrFalse", {
    get: function isTrueOrfalse(){
        return this._questionType == QuizOptions.TRUE_OR_FALSE;
    }
})
