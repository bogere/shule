Questions = new Mongo.Collection('questions');

QuestionSchema = new SimpleSchema({ //helps u to define schemas like in MYSQL.
    id: {
        type: String,
        optional: false,
        unique: true
    },
    questionType: {
        type:String,
        optional: false
    },
    quizId: {
        type:String,
        optional: false
    },
    title: {
        type:String,
        optional: false
    },
    description : {
        type:String,
        optional: false
    },
    numberOfOptions: {

        type: Number,
        optional: true,
        max: 10,
        min: 2
    },
    optionTitles: {
        label: "Options",
        type: [Object],
        optional: false,
        autoform: {
            type: "radio-with-text-input",
            options: function(){
                var optionsArray = [];

                for ( var i=0; i < 8; i++){
                    var option = Quiz.generateAnswerOption("", false, i)
                    optionsArray.push(option);
                }
                return optionsArray;
            }
        },
        custom: function() { //Goldsoft-- u can check for  empty fields  on the client... but recall never re
        	//rely on client side validations.
            // This custom function renders an error, if this field is not equal to
            // the new Password field supplied in the form.
            console.log(" custom validation ");
            console.log("this.value, this.field ");
            console.log(this.value);
            var titlesValid = true;
            var selectionFound = false;
            for (var i = 0; i < this.value.length; i++){
                var obj = this.value[i];
                if (!obj.title){
                    titlesValid = false;
                    return "invalidQuestionTitles";
                }
                if (obj.isSelected){
                    selectionFound = true;
                }
            }
            if (!selectionFound){
                return "invalidQuestionSelection";
            }
        }
    },
     //rectify that problem of   SyntaxError: Unexpected token :     option

   "optionTitles.$.title":  {
        type:String,
        optional: false
    },

    "optionTitles.$.isSelected": {
        type:Boolean,
        optional: false
    },
    "optionTitles.$.index":{
        type:Number,
        optional: false
    },

  options:{
        label: "Options",
        type: [Object],
    }
})


Questions.attachSchema(QuestionSchema);
