/// js will go here
var data = [
    {
        ask: "a  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
    {
        ask: "b  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
    {
        ask: "c  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
    {
        ask: "d  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
    {
        ask: "e  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
    {
        ask: "f  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
    {
        ask: "g  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
    {
        ask: "h  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
    {
        ask: "i  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
    {
        ask: "j  question",
        answers: ["ans1", "ans2", "ans3", "ans4"],
        rightAnswer: "ans2"
    },
];
var qindex = 0;
var score = 0;

document.getElementById("start").onclick = function () {
    window.alert("Hi there!");  //TEST FOR NOW ONLY 
}

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#start");
var data = document.querySelector("#data");
var container = document.querySelector("#container");
var secondsLeft = 20; ////SETTING LOW NOW FOR TESTING
var holdInterval = 0;


timer.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);

                currentTime.textContent = "GAME OVER";
            }
        }, 1000);
    }

});


















//// set a timer to zero
///  set score to zero
//// need a counter to count how many times we go through or when at end of questions
//// change time when button is clicked to 100

///write some functions 

//// need function to put the questions up or into an element and write to screen 
//// function to listen ?? 

/// need function to hide answers not selected
/// keep track of score after question , deduct timer if question wrong ect....

/// need a function to change to the next question
/// write new/next question to screen

/// loop through all questions or until timer is zero ---penalty -10 for wrong ans

/// once game over clear screen display final score - 

///now timer fuction is finished --- timer must be kept running all the while since start til now

/// ask user for initials - test for initials use JSON to store locally
//// display hi scores , if a button clicked clear score(s) and local storage
/// if play again is slected start timer and roll back up top
















