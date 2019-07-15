$(document).ready();

var myQuestions= [
    { question: "What are the languages of Scotland?",
        answers: [
            "English and French",
            "Gaelic and English",
            "Italian and Spanish",
            "Only English"
        ]
    },
    { question: "What is the capitol of Scotland?",
        answers: {

        }
    },
    { question: "Which of the following areas are considered part of Scotland?",
        answers: {

        }
    },
    { question: "What is the official animal of Scotland?",
        answers: {

        }
    },
    { question: "Of the 790 islands in Scotland, how many are inhabited?",
        answers: {

        }           
    },
    { question: "Scotland's famous Loch Ness is home to which creature?",
        answers: {

        }
    },
    { question: "What is the flower of Scotland?",
        answers: {

        }   
    },
    { question: "Scotland has the highest proportion of red heads in the world. True or False?",
        answers: {


        }
}];


// Countdown Timer Start -->
function startTimer(duration, display) {
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

window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('.myTimer');
    startTimer(twoMinutes, display);
};

// Countdown Timer End 


$(".startButton").click(startTimer()


);


var questContain = $("Question1")

function createQuestion (questionItem) {
    console.log("does this work?", questionItem)
   var questionDiv = $("<div>");
   var html = `
   <h3>${questionItem.question}?</h3>
   <ul>
   </ul>
   `
   console.log(questContain);
   questionDiv.html(html)
   console.log(questionDiv);
   questContain.append(questionDiv)
       
    //    <li><input type='radio' name='test' value='Only English'> Only English</li>


}
 createQuestion(myQuestions[0])


function getAnswer (Answer) {
    console.log("does this work?", Answer)
}

function clear () {
    console.log("does this work?", )
}

function score () {
    console.log("does this work?", displayScore)
}

//<!-- Pseudo Code
// Create Github repository, clone - done
// Create file layouts with HTML, CSS, JS, and Images - done
// Create layout with/on HTML and CSS - NEED CSS FORMATTING
    // Would like to have a colored background for the quiz 
    // Would like to have a fun font for the header, maybe text displayed
    // Would like to have a picture of Scotland somewhere (ex: cow, mountains, unicorn, crest, country map, thistle, etc.)
// Create start page that initiates timer

// If else statement to initiate timer and quiz
// Create a Timer with 120 seconds at least (intiated by start button, and begins countdown)
// Create array with all the questions and answers
// Display questions and corresponding answers in order (show?) - Should it be a form? 
    // Radio buttons needed for answers-- HTML (Only 1 selector) 
    // Need if else statements to determine correct and incorrect answer
    // Track unanswered/incorrect/correct answers 
// Create Done/Submit button to complete Quiz OR when timer is over:
    // Quiz stops and performs a tally and reset
        // Display tracked unanswered/incorrect/correct answers 
        // Create Play Again button that resets the game (refreshes page).

