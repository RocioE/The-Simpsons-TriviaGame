    // The player will have a limited amount of time to finish the quiz. 
    // The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
    // Don't let the player pick more than one answer per question.
    // Don't forget to include a countdown timer.

    var questions= [];//stores all the questions in the test//
    var score= 0;//how many questions the user got right//
    var answerCorrect;
    var answerWrong;

    for(var i= 0; i <questions.length; 1++){

    }

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
            function checkAnswer(answer){ //here is where it check for correct anser//
                if(anser ==question[runningQuestion].correct){  //this checks within array//
                    //answer is correct// 
                    if (runningQuestion < lastQuestion){
                        runningQuestion++;
                        renderQuestion();
                    }

            }

            function answerCorrect(){
                document.getElementById(runningQuestion);
                    console.log(answerCorrect);
            }

            function answerWrong(){
                document.getElementById(runningQuestion)

            }
            StaticRange.addEventListener("click.")//add event listener

            function startQuiz(){  //need to create function to start game//
                startQuiz.style.display="none";
                renderQuestion();
            }






         //!this keeps track of the running question//
         const lastQuestion = questions, length, -1;//! ahould it be at zero???
         let runningQuestion = "0";   


         //!next step render the question, so you create a function//
         function renderQuestion (){
             let q = questions[runningQuestion];

             question.innerhtml = "<p>" + q.question + "</p>";
             choiceA.innerHTML = q.choiceA;
             choiceB.innerHTML = q.choiceB;
             choiceC.innerHTML = q.choiceC; //The innerHTML property is part of the Document Object Model (DOM),allows Js code to manipulate a website being displayed. Specifically, it allows reading and replacing everything within a given DOM element
console.log(choice)
         }
   