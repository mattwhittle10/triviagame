$(document).ready(function() {
    var triviaQuestions = [
        {
            question: "What is Michael Scott's middle name?",
            choice: ["George", "Stephen", "Gary", "Jay"],
            answer: 2,
            // photo: ,
        },
        {
            question: "Where did Michael get his 'World's Best Boss Mug?'",
            choice: ["Over the Moon", "Spencers", "Heaven & Earth Gift Shop", "La Ti Da"],
            answer: 1,
            // photo: ,
        },
        {
            question: "What is Dwight Schrute's middle name?",
            choice: ["Kyle", "John", "Kurt", "Luke" ],
            answer: 2,
            // photo: ,
        },
        {
            question: "What does Kevin wear to Jim and Pam's wedding for shoes?",
            choice: ["Slippers", "Tissue Boxes", "Garbage Bags", "Just his Socks"],
            answer: 1,
            // photo: ,
        },
        {
            question: "What is Darryl doing before the 'Fun Run' during Michae's speech?",
            choice: ["Feeding a Squirrel", "Sleeping", "Eating Potato Chips", "Driving the Forklift"],
            answer: 0,
            // photo: ,
        },
        {
            question: "What type of chips did Jim and Karen search for all day?",
            choice: ["Herr's", "Lays", "Terra", "Kettle" ],
            answer: 0,
            // photo: ,
        },
        {
            question: "Jim left Scranton to go where?",
            choice: ["Dalton", "Parker", "Utica", "Stamford"],
            answer: 3,
            // photo: ,
        },
        {
            question: "Who cuts of the top of the Christmas Tree during the Christmas Party?",
            choice: ["Creed", "Michael", "Kevin", "Jim"],
            answer: 2,
            // photo: ,
        },
        {
            question: "What is Andy Bernard's middle name?",
            choice: ["Baines", "Michael", "Birch", "Judd"],
            answer: 0,
            // photo: ,
        },
        {
            question: "Who plays the part of 'Golden Face' in Threat Level Midnight?",
            choice: ["Michael", "Dwight"],
            answer: 1,
            // photo: ,
        }];
    var currentQuestion;
    var select;
    var countDown = false; 
    var timer = 30;
    
    $("#restart").hide();
    $("#start").click(function() {
        $("#start").hide();
        showQuestion();
        startTimer();
    })

    //timer start
    function startTimer() {
        if (!countDown) {
            intervalId = setInterval(decrease, 1000);
            countDown = true;
        }
    }

    function decrease() {
        $("#timer").html("<h3> Time Remaining " + timer + "</h3>");
        timer --;
    }


    //function to randomly generate a question from the array
    function showQuestion() {
        currentQuestion = Math.floor(Math.random() * triviaQuestions.length);
        console.log(currentQuestion);
        //variable to get the objects out of the index chosen in the array
        select = triviaQuestions[currentQuestion];
        console.log(select);
    }
    showQuestion();
});


