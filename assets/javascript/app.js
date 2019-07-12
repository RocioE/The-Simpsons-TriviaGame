    // The player will have a limited amount of time to finish the quiz. 
    // The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
    // Don't let the player pick more than one answer per question.
    // Don't forget to include a countdown timer.

    var questions= [];//stores all the questions in the test//
    var score= 0;//how many questions the user got right//
    var answerCorrect;
    var answerWrong;

    let questions= [//this is an array of question objects//
        {
            question : "In which town do the Simpsons reside?",
            choiceA : "Springfield",
            choiceB : "Shelbyville",
            choiceC : "Seinfeld",
            answer: "Springfield",
        },
        {
            question : "Who founded the Simpsons' town?",
            choiceA : "Jebadiah Springfield",
            choiceB : "Zachariah Springfield",
            choiceC : "Springfield Manhattan",
            answer: "Jebadiah Springfield",
        },
        {
            question : "What is the name of Lisa's jazz mentor?",
            choiceA : "Billy Jazzman",
            choiceB: "Blind Willy Witherspoon",
            choiceC: "Bleeding Gums Murphy",
            answer: "Bleeding Gums Murphy",
            
        },
        {
            question : "What is the name of the minister at the First Church of Springfield?",
            choiceA : "Ned Flanders",
            choiceB : "Timothy Lovejoy",
            choiceC : "Carl Carlson",
            answer: "Timothy Lovejoy",

        },
        {
            question : "What is the name of Mr. Burns' teddy bear?",
            choiceA: "Nono",
            choiceB: "Gogo",
            choiceC: "Bobo",
            answer: "Bobo",
        },

    ];

         //!this keeps track of the running question//
         const lastQuestion = questions, length,
         let runningQuestion = "0";   


         //!next step render the question, so you create a function//
         function renderQuestion (){

         }
   