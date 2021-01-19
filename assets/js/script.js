/// js will go here

/////define object holds questions, answers and correct answer
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

//initialize variables to zero start with no score , qindex 
//counts what question the user is on
var qindex = 0;
var score = 0;
/// need to add styling 
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#start");
var datadiv = document.querySelector("#datadiv");
var container = document.querySelector("#container");
// user starts with 100 seconds 

var secondsLeft = 100;
var holdInterval = 0;
//adds element when we need it
var ulWrite = document.createElement("ul");
var dataIndex = 0;
// timer working , user gets 10 second penalty need to hide it
// when game is over 
/// the timer starts when they click the button
timer.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                /// alert("game over loop found")
                alldone();
                currentTime.textContent = "GAME OVER";
            }
        }, 1000);
    }
    render(qindex);
});
///clearing data here before pulling questions and 
/// answers from the object
function render(qindex) {
    datadiv.innerHTML = "";
    ulWrite.innerHTML = "";


    /// by  not hard coding to ten we can add more questions later
    /// would need to change starting timer value up
    /// for each question added on
    for (var i = 0; i < data.length; i++) {
        var userQuestion = data[qindex].ask;
        var userChoice = data[qindex].answers;
        datadiv.textContent = userQuestion;

    }

    userChoice.forEach(function (newitem) {
        var item = document.createElement("li");
        item.textContent = newitem;
        datadiv.appendChild(ulWrite);
        ulWrite.appendChild(item);
        item.addEventListener("click", (compare));

    })
}
//// compare ansewer user clicks on to real answer
/// if ok tell them good
/// if not tell them sorry and the right answer
/// dock them ten seconds from the value
///holding the time secondsLeft
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == data[dataIndex].rightAnswer) {
            score++;
            createDiv.textContent = "Good - The answer was " + data[dataIndex].rightAnswer;
        } else {
            secondsLeft = secondsLeft - 10;
            createDiv.textContent = "I'm sorry you missed that one. The answer was " + data[dataIndex].rightAnswer;

        }
    }
    /// count qindex up one after each user input is
    //determined to be right or wrong
    /// if we are at the end of the questions 
    /// call function all done defined further down
    qindex++;
    if (qindex >= data.length) {
        alldone();
        createDiv.textContent = "Your answered " + score + " out of 10 questions correct !!";

    } else {
        render(qindex);

    }
    datadiv.appendChild(createDiv);

}
/// if questions finished clear data again
function alldone() {
    datadiv.innerHTML = "";
    currentTime.innerHTML = "";
}


if (secondsLeft >= 0) {
    var timeleft = secondsLeft;
    clearInterval(holdInterval);
}










































