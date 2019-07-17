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
        choices2: [
            "Miami", 
            "Glasglow",
            "Edinburgh",
            "London"
        ],
        answer: "Edinburgh"
    },
    { question: "Which of the following areas are considered part of Scotland?",
        choices: [
            "Lowlands",
            "Highlands",
            "Islands",
            "All Choices"
        ], 
        answer: "All Choices"
    },
    { question: "What is the official animal of Scotland?",
        choices: [
            "Unicorn",
            "Red Deer",
            "Hare",
            "Squirrel"
        ], 
        answer: "Unicorn"
    },
    { question: "Of the 790 islands in Scotland, how many are inhabited?",
        choices: [
            "358",
            "130",
            "612",
            "760"
        ],
        answer: "130"         
    },
    { question: "Scotland's famous Loch Ness is home to which creature?",
        choices: [
            "Mertle, the Aligator",
            "Patrick, the Unicorn",
            "James, the Goldfish", 
            "Nessie, the Loch Ness Monster"
        ],
        answer: "Nessie, the Loch Ness Monster"
    },
    { question: "What is the flower of Scotland?",
        choices: [
            "Thistle",
            "Dandilion",
            "Daisy",
            "Bluebells"
        ],
        answer: "Thistle"
    },
    { question: "Scotland has the highest proportion of red heads in the world. True or False?",
        choices: [
            "True",
            "False"
        ],
        answer: "True"
}];


$('#startButton').on("click", Timer);

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
};
function Timer () {
    var twoMinutes = 60 * 2
        display = document.querySelector('.myTimer');
    startTimer (twoMinutes);
};

// Countdown Timer End

createQuestion();
function createQuestion() {
    for(var i=0; i < myQuestions.length; i++) {
    var questionList = (myQuestions[i].question);
    
    console.log(questionList);
    $("#questionContainer").append(questionList);
    
}};

//This is supposed to format questions into separate lines. 
// Quiz() ---> would include in the createQuestion function
// function Quiz() {
//     var quests = createQuestion.split(',');
//     var res = quests.join(" <br> ");
//     return res;    
// };

// This only gives me a list of my ANSWERS and not CHOICES. Unsure of how to get Choices - see function below. 
createAnswer();
function createAnswer() {
    var length =myQuestions.length;
    for(var i=0; i < length; i++) {
        for(var key in myQuestions[i])
        { var answerList = (myQuestions[i][key])
        }
        console.log(answerList);
}};


// Gives error msg. of choices being undefined? 
// function createChoices() {
//     for(var i=0; i < myQuestions.question.choices.length; i++) {
//     var choicesList = (myQuestions.question[i].choices);
//     console.log(choicesList);
//     $("#questionContainer").append(choicesList)
// }};
// createChoices ();

//Function to give Questions Answers with Radio Buttons ---> would include in function createChoices.
    //<input type="radio" name="choices" value="multChoiceList"> test<br />

//Would use createQuiz function in the on click event that starts the timer. 
// function createQuiz () {
//     createQuestion
//     CreateChoices;
//     hideResults
// };

// hides button when page loads. 
// $("#DoneButton").hide();

//Function hideResults () {
//     $("#Results").hide();
//     $("#DoneButton").show();
//     $("#paButton").hide()
// }

//Function showResults () {
//     $("#Results").show();
// //     $("#DoneButton").hide();
// //     $("#paButton").show()
// // }
// }

// Both of the following scenarios should be included in an if statement:
    //Once timer is complete = hide quizContainer div/timer div/DoneButton, and show Results div/paButton. 
    // If Done button clicked, hide quizContainer div/timer div/DoneButton, and show Results div/paButton.. 
        //would need a click event to trigger. 
        //would need to reference Score function.

// var correct = 0;
// var incorrect = 0;
// var unanswered = 0;

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


// Reset Function - should go to orginal home screen. 
// Would like to execute reset function when "play again?" button with a click event. 

// function clear () {
//     var correct = 0;
//     var incorrect = 0;
//     var unanswered = 0;
// unsure if radio buttons need to reset as well?
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