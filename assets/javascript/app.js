    // The player will have a limited amount of time to finish the quiz. 
    // The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
    // Don't let the player pick more than one answer per question.
    // Don't forget to include a countdown timer.

    var questions= [];//stores all the questions in the test//
    var score= 0;//how many questions the user got right//
    var answerCorrect;
    var answerWrong;
 

    var questions= [//this is an array of question objects//
        {
            question : "In which town do the Simpsons reside?",
            choices : ["Springfield", "Shelbyville", "Seinfeld"],
            answer: "Springfield",
        },
        {
            question : "Who founded the Simpsons' town?",
            choices : ["Jebadiah Springfield", "Zachariah Springfield", "Springfield Manhattan"],
            answer: "Jebadiah Springfield",
        },
        {
            question : "What is the name of Lisa's jazz mentor?",
            choices : ["Billy Jazzman", "Blind Willy Witherspoon", "Bleeding Gums Murphy"],
            answer: "Bleeding Gums Murphy",
            
        },
        {
            question : "What is the name of the minister at the First Church of Springfield?",
            choices : ["Ned Flanders", "Timothy Lovejoy", "Carl Carlson"],
            answer: "Timothy Lovejoy",

        },
        {
            question : "What is the name of Mr. Burns' teddy bear?",
            choices: ["Nono", "Gogo", "bobo"],
            answer: "Bobo",
        },

    ];
    function checkAnswer(Useranswer,question){ //here is where it check for correct anser//
        if(Useranswer == question){  //this checks within array//
            console.log("correct")
            }

    }
   

    for(var i= 0; i<questions.length; i++){
      var button=$("<button>");
      var question= questions [i]
     // button.attr("data-name",questions[i].choices[i]);
     var header= $("<h1>").text(question.question)
      console.log(header)
        $("#query").append(header)
        
    }
    
 
           $("button").on("click", function(){
               $(this).attr("data-name")


           })

            function answerCorrect(){
                document.getElementById(runningQuestion);
                    console.log(answerCorrect);
            }

            function answerWrong(){
                document.getElementById(runningQuestion)
            }


         
            function startQuiz(){  //need to create function to start game//
                startQuiz.style.display="none";
                renderQuestion();
            }






         //!this keeps track of the running question//
         //const lastQuestion = questions, length, -1;//! ahould it be at zero???
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