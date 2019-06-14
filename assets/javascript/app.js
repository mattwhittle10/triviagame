$(document).ready(function() {
    var triviaQuestions = [
        {
            question: "What is Michael Scott's middle name?",
            choice: [" George ", " Stephen ", " Gary ", " Jay "],
            answer: 2,
            // photo: ,
        },
        {
            question: "Where did Michael get his 'World's Best Boss Mug?'",
            choice: [" Over the Moon ", " Spencers ", " Heaven & Earth Gift Shop ", " La Ti Da "],
            answer: 1,
            // photo: ,
        },
        {
            question: "What is Dwight Schrute's middle name?",
            choice: [" Kyle ", " Fart ", " Kurt ", " Luke " ],
            answer: 2,
            // photo: ,
        },
        {
            question: "What does Kevin wear to Jim and Pam's wedding for shoes?",
            choice: [" Slippers ", " Tissue Boxes ", " Garbage Bags ", " Just his Socks "],
            answer: 1,
            // photo: ,
        },
        {
            question: "What is Darryl doing before the 'Fun Run' during Michael's speech?",
            choice: [" Feeding a Squirrel ", " Sleeping ", " Eating Potato Chips ", " Driving the Forklift "],
            answer: 0,
            // photo: ,
        },
        {
            question: "What type of chips did Jim and Karen search for all day?",
            choice: [" Herr's ", " Lays ", " Terra ", " Kettle " ],
            answer: 0,
            // photo: ,
        },
        {
            question: "Jim left Scranton to go where?",
            choice: [" Dalton ", " Parker ", " Utica ", " Stamford"],
            answer: 3,
            // photo: ,
        },
        {
            question: "Who cuts of the top of the Christmas Tree during the Christmas Party?",
            choice: [" Creed ", " Michael ", " Kevin ", " Jim "],
            answer: 2,
            // photo: ,
        },
        {
            question: "What is Andy Bernard's middle name?",
            choice: [" Baines ", " Michael ", " Birch ", " Judd "],
            answer: 0,
            // photo: ,
        },
        {
            question: "Who plays the part of 'Golden Face' in Threat Level Midnight?",
            choice: [" Michael ", " Dwight ", " Jim ", " Toby "],
            answer: 2,
            // photo: ,
        }];
    var currentQuestion;
    var unansweredQuestions = 1;
    var correctAnswers = 1;
    var wrongAnswers = 1;
    var select;
    var countDown = false; 
    var timer = 10;
    var answerArray = [];
    var guess = [];
    
    $("#dataBox").hide();
    $("#restart").hide();
    $("#start").click(function() {
        $("#dataBox").show();
        $("#start").hide();
        startTimer();
        for (var i = 0; i < triviaQuestions.length; i++) {
            answerArray.push(triviaQuestions[i]);
            // console.log(answerArray)
        //function to randomly generate a question from the array
        function showQuestion() {
            currentQuestion = Math.floor(Math.random() * triviaQuestions.length);
            // console.log(currentQuestion);
            //variable to get the objects out of the index chosen in the array
            select = triviaQuestions[currentQuestion];
            // console.log(select);
            
            $("#question").html("<h3> Question: " + select.question + "</h3>");
            for(var i = 0; i < select.choice.length; i++) {
                var usersChoice = $("<div>");
                usersChoice.addClass("usersChoice");
                usersChoice.html(select.choice[i]);    
                usersChoice.attr("guess", i);
                $("#button1").html(select.choice.slice(0,1));
                $("#button2").html(select.choice.slice(1,2));
                $("#button3").html(select.choice.slice(2,3));
                $("#button4").html(select.choice.slice(3));

                $("#button1").click(function(){
                    guess.push(select.choice.slice(0,1));
                    console.log(select.choice.slice(0,1));
                })
                $("#button2").click(function(){
                    guess.push(select.choice.slice(1,2));
                    console.log(select.choice.slice(1,2));
                }) 
                $("#button3").click(function(){
                    guess.push(select.choice.slice(2,3));
                    console.log(select.choice.slice(2,3));
                }) 
                $("#button4").click(function(){
                    guess.push(select.choice.slice(3));
                    console.log(select.choice.slice(3));  
                })
            
                    if (guess === select.answer) {
                        console.log(select.answer);
                        console.log(guess);
                        correctAnswers++;
                        $("#correct").html("<h2 Good Job! >" +  select.choice[select.answer] + " is correct!<h2>")
                        $("#restart").show();
                    } else { (guess !== select.answer) 
                        wrongAnswers++;
                        $("#incorrect").html("<h2 Sorry, " + select.choice[select.answer] + " is incorrect.</h2>")
                        $("#restart").show();
                    }
                
            }
        }showQuestion()
    }

    })

    //timer start
    function startTimer() {
        if (!countDown) {
            intervalId = setInterval(decrease, 1000);
            countDown = true;
        }
    }

    //function to write the timer to the DOM 
    function decrease() {
        $("#timer").html("<h3> Time Remaining " + timer + "</h3>");
        timer --;
        
        if (timer === 0) {
            function unansweredWrite() {
                $("#unanswered").html("<h5> Unanswered Questions: " + unansweredQuestions++ + "</h5>");
            }unansweredWrite();
                stopTimer();
                $("#alert").html("<h2> Time's up! The correct answer is: " + select.choice[select.answer] + "<h2>")
                $("#restart").show();
            }
        
    $("#restart").click(function(){
        $("#alert").hide();
        setTimeout(function(){
            $("#alert").show();
        },10000);
            timer = 10;
            startTimer();
            for (var i = 0; i < triviaQuestions.length; i++) {
                answerArray.push(triviaQuestions[i]);
                // console.log(answerArray)
        //function to randomly generate a question from the array
        function showQuestion() {
            currentQuestion = Math.floor(Math.random() * triviaQuestions.length);
            // console.log(currentQuestion);
            //variable to get the objects out of the index chosen in the array
            select = triviaQuestions[currentQuestion];
            // console.log(select);
            
            
            $("#question").html("<h3> Question: " + select.question + "</h3>");
            for(var i = 0; i < select.choice.length; i++) {
                var usersChoice = $("<div>");
                usersChoice.addClass("usersChoice");
                usersChoice.html(select.choice[i]);     
                usersChoice.attr("guess", i);
                $("#button1").html(select.choice.slice(0,1));
                $("#button2").html(select.choice.slice(1,2));
                $("#button3").html(select.choice.slice(2,3));
                $("#button4").html(select.choice.slice(3));

                $("#button1").click(function(){
                    guess.push(select.choice.slice(0,1));
                    console.log(select.choice.slice(0,1));
                })
                $("#button2").click(function(){
                    guess.push(select.choice.slice(1,2));
                    console.log(select.choice.slice(1,2));
                }) 
                $("#button3").click(function(){
                    guess.push(select.choice.slice(2,3));
                    console.log(select.choice.slice(2,3));
                }) 
                $("#button4").click(function(){
                    guess.push(select.choice.slice(3));
                    console.log(select.choice.slice(3));  
                })
                    if (guess === select.answer) {
                        correctAnswers++;
                        $("#correct").html("<h2 Good Job! >" +  select.choice[select.answer] + " is correct!<h2>")
                        $("#restart").show();
                    } else { (guess !== select.answer) 
                        wrongAnswers++;
                        $("#incorrect").html("<h2 Sorry, " + select.choice[select.answer] + " is incorrect.</h2>")
                        $("#restart").show();
                    }
                
            }

            
        
        }showQuestion();
    
    }
    
})      

}

    //function to stop the timer
    function stopTimer() {
        countDown = false;
        clearInterval(intervalId);
    }

});

    
        