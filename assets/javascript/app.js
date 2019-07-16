$(document).ready();

var myQuestions= [
    { question: "What are the languages of Scotland?",
        choices: [
            "English and French",
            "Gaelic and English",
            "Italian and Spanish",
            "Only English"
        ],
        answer: "Gaelic and English"
    },
    { question: "What is the capitol of Scotland?",
        choices: [
            "Miami", 
            "Glasglow",
            "Edinburgh",
            "London"
        ],
        answer: ["Edinburgh"]
    },
    { question: "Which of the following areas are considered part of Scotland?",
        choices: [
            "Lowlands",
            "Highlands",
            "Islands",
            "All Choices"
        ], 
        answer: ["All Choices"]
    },
    { question: "What is the official animal of Scotland?",
        choices: [
            "Unicorn",
            "Red Deer",
            "Hare",
            "Squirrel"
        ], 
        answer: ["Unicorn"]
    },
    { question: "Of the 790 islands in Scotland, how many are inhabited?",
        choices: [
            "358",
            "130",
            "612",
            "760"
        ],
        answer: ["130"]          
    },
    { question: "Scotland's famous Loch Ness is home to which creature?",
        choices: [
            "Mertle, the Aligator",
            "Patrick, the Unicorn",
            "James, the Goldfish", 
            "Nessie, the Loch Ness Monster"
        ],
        answer: ["Nessie, the Loch Ness Monster"]
    },
    { question: "What is the flower of Scotland?",
        choices: [
            "Thistle",
            "Dandilion",
            "Daisy",
            "Bluebells"
        ],
        answer: ["Thistle"] 
    },
    { question: "Scotland has the highest proportion of red heads in the world. True or False?",
        choices: [
            "True",
            "False"
        ],
        answer: "True"
}];

// My attempt to click button to start timer - not working. tie to CreateQuiz? 
// $('#startButton').click(function() {
//     Timer();
// });
$('#startButton').on("click", Timer);

//     document.getElementById("myTimer").innerHTML = minutes + ":" + seconds)

// Countdown Timer Start -->
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("myTimer").innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
function Timer () {
    var twoMinutes = 60 * 2
        display = document.querySelector('.myTimer');
    startTimer (twoMinutes);
};

// Timer(); 
// Calling Timer fuction to start countdown. Unsure how to get it from looping/reseting to 2 mins?

// Countdown Timer End 



//Function to Create Questions 
// Unsure how to get text onto page? Have tried html, text, and append...
// Not sure how to narrow it down to only the question. When I try to add myQuestions.question - error message. 


createQuestion()
function createQuestion () {
    for(var i=0; i < myQuestions.length; i++) {
    var questionList = (myQuestions[i].question);
    console.log(questionList);
   $("#questionContainer").text(questionList);
  
    }
}

 //Function to give Questions Answers with Radio Buttons
 // Questions/Confusion: Again, not sure how to narrow it down from Question to only Choices array - 
        //choices is undefined when by its self and with myQuestions. in front of it

//  CreateAnswerChoices(choices[0])
// function CreateAnswerChoices (Answer) {
//     for (var i = 0; i < choices.length; i++){
//         var answerList = (choices[i].answer);
//         console.log("does this work?", answerList)
//         <input type="radio" name="q1" value="answerList"/>
//     }
//     var response = 
//     //should equal checked radio button - unsure how to notate? 

// }

// // Function CreateQuiz (){
//     createQuestion
//     CreateAnswerChoices;
//     $("#Results").hide();
// }

// Need to create a Submit/Done button. If clicked, or time runs out, the quiz is hidden, and results show. 

// ---> calling score function to complete 
    // needs to be a more global if statement that toggles between 
    // if questions and answers are showing, then results hidden
    // if results showing, hide questions/answers divs

var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Function Score () {
  // if(response === myQuestion[i].answer){ 
    //     correct++;
    //     $("#CorrectNum").text(correct);
    // } else if (response !== myQuestion[i].answer) {
    //     incorrect++;
    //     $("#IncorrectNum").text(incorrect);
    // } else {
    //     unanswered++;
    //     $("#UnansweredNum").text(unanswered);      
    // };
// };


// Reset Function - should refresh page to the orginal home screen. 
// Question - would you need to reset the variables listed below, or just complete a refresh? 
// Would like to execute reset function when "play again?" button is pressed. 

// function clear () {
//     var correct = 0;
//     var incorrect = 0;
//     var unanswered = 0;
// }




//<!-- Original Pseudo Code
// Create Github repository, clone - done
// Create file layouts with HTML, CSS, JS, and Images - done
// Create layout with/on HTML and CSS - NEED CSS FORMATTING
    // Would like to have a colored background for the quiz 
    // Would like to have a fun font for the header, maybe text displayed
    // Would like to have a picture of Scotland somewhere 
// Create start page that initiates timer
    // This should only have Title and Start button showing

// If else statement to initiate timer and quiz
    // Once Start Button is clicked, the quiz should show with all options and timer starts/displays countdown
// Create a Timer with 120 seconds at least (intiated by start button, and begins countdown)
// Create array with all the questions and answers
// Display questions and corresponding answers in order (show?) - Should it be a form? 
    // Radio buttons needed for answers-- HTML (Only 1 selector) 
    // Need if else statements to determine correct and incorrect answer
    // Track unanswered/incorrect/correct answers 
// Create Done/Submit button to complete Quiz OR when timer is over:
    // Quiz stops and performs a tally and reset
        // Display tracked unanswered/incorrect/correct answers 
        // Create Play Again button that resets the game (refreshes page)