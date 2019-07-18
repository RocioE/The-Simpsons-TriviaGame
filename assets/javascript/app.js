    // The player will have a limited amount of time to finish the quiz. 
    // The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
    // Don't let the player pick more than one answer per question.
    // Don't forget to include a countdown timer.


    //starts game by clicking start, its not counting down!!!!////
    window.onload = function () {
        $('#start').on('click', function () {
            game.start();
            $("#end").show()
    
        })
    
        $("#end").on('click', function () {
            //alert("Game Over")
            game.Game();
            $("#end").hide()
            $("#restart").show()   ///game ends and should restart///
    
        })
    }


   //stores all the questions in the trivia game//
    var score= 0;//how many questions the user got right//
    var answerCorrect;
    var answerWrong;
    var counter = 60; ///giving 60sec for player to finish game////
 

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
            answer: "Bobo"
        },
    ];

console.log(questions[0].choices[0])
    function checkAnswer(Useranswer,question){ //here is where it check for correct anser//
        if(Useranswer == question){  //this checks within array//
            console.log("correct")
            }

    }

    //var game = {
        // countdown: function () {
        //     counter--;
        //     $('#counter').html(counter);
        //     if (counter <= 0) {
        //         alert("Game");
        //         $("#end").hide()
        //         $("#restart").show()
        //         game.done();
   
//here we are creating buttons that will contain the questions and answers for each question
    for(var i= 0; i<questions.length; i++){
        var q = questions[i];
        
        var questionbutton=$("<button>");
        var choiceA = $("<button>");
        var choiceB = $("<button>");
        var choiceC = $("<button>");
        choiceA.text(q.choices[0]);
        choiceB.text(q.choices[1]);
        choiceC.text(q.choices[2]);
        
    // console.log(q);
    //     questionbutton.text(q.question);
    //  choicesButton.text(quest.choices)

    // var choices= questions.choices[i];
    //  button.attr("data-name",questions[i].choices[i]);
    //      var header= $("<h3>");
    //  header.text(question.question)
    //   console.log(header)
        var h4 = $("<h4>")
        h4.text(q.question)
       $("#query").append(h4);
       $("#query").append(choiceA);
       $("#query").append(choiceB);
       $("#query").append(choiceC);
        
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