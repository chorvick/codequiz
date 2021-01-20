/// js will go here

/////define object holds questions, answers and correct answer
//// have to add the real questions in and take test data out 
var data = [
    {
        ask: "Inside which HTML element do we put the JavaScript?",
        answers: ["<javascripit>", "<script>", "<js>", "<scripting>"],
        rightAnswer: "<script>"
    },
    {
        ask: "How do you create a function in JavaScript ?",
        answers: ["function myFunction()", "function = myFunction()", "function: myFunction()", "None of the above"],
        rightAnswer: "function myFunction()"
    },
    {
        ask: "Which of these means i is greater than five ?",
        answers: ["i === 5", "i < 5", "i > 5", "i >= 5"],
        rightAnswer: "i > 5"
    },
    {
        ask: "Which of the following is an example of a boolean ?",
        answers: ["undefined", "===", "negative", "true"],
        rightAnswer: "true"
    },
    {
        ask: "How many values can an array hold ?",
        answers: ["one", "two", "one hundred", "none of the above"],
        rightAnswer: "none of the above"
    },
    {
        ask: "Using Math.random() returns a random nunber between ?",
        answers: ["0 to 100", "1 to 100", "0 to 1", "1 to 10"],
        rightAnswer: "0 to 1"
    },
    {
        ask: "The first element of an array is stored in which position ?",
        answers: ["1", "0", "as defined", "none of the above"],
        rightAnswer: "0"
    },
    {
        ask: "In JavaScript console.log(a) prints a to the ?",
        answers: ["screen", "alert box", "dom", "console"],
        rightAnswer: "console"
    },
    {
        ask: "Double quotes and single quotes can be used in JavaScript for identical operations ?",
        answers: ["never", "in a function", "in an array", "always"],
        rightAnswer: "ans2"
    },
    {
        ask: "Each line of JavaScript normally ends with a ?",
        answers: ["curley brace", "colon", "asterik", "semicolon"],
        rightAnswer: "semicolon"
    },
];

//initialize variables to zero start with no score , qindex 
//counts what question the user is on
var qindex = 0;
var score = 0;
var dataIndex = 0;
/// 
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#start");
var datadiv = document.querySelector("#datadiv");
var container = document.querySelector("#container");
// user starts with 100 seconds 

var secondsLeft = 100;
var holdInterval = 0;
//adds element when we need it
var ulWrite = document.createElement("ul");

// timer working , user gets 15 second penalty need to hide it
// when game is over 
/// the timer starts when they click the button



timer.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                alldone();
                currentTime.textContent = "Sorry time has run out !!!";
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

        if (element.textContent == data[qindex].rightAnswer) {
            score++;
            createDiv.textContent = "Good - The answer was " + data[qindex].rightAnswer;
        } else {
            secondsLeft = secondsLeft - 15;
            createDiv.textContent = "I'm sorry you missed that one. The answer was " + data[qindex].rightAnswer;

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

    /// header


    var makeh = document.createElement("h1");
    makeh.setAttribute("id", "makeh");
    makeh.textContent = "GAME OVER";
    datadiv.appendChild(makeh);

    //
    //
    var makep = document.createElement("p");
    makep.setAttribute("id", "makep");
    datadiv.appendChild(makep);

    // add time to score for final score 

    if (secondsLeft >= 0) {

        var timeleft = secondsLeft;
        var makep2 = document.createElement("p");
        clearInterval(holdInterval);
        if (timeleft === undefined) {
            timeleft = 0
        }
        makep.textContent = "Your Final Score Was " + timeleft;
        datadiv.appendChild(makep2);

    }
    ////ask for initials for high score table
    var label = document.createElement("label");
    label.setAttribute("id", "label");
    label.textContent = "Please enter your initials ";
    datadiv.appendChild(label);
    /// get the initials

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "initials");
    input.textContent = "";
    datadiv.appendChild(input);

    /// user submits initials

    var submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "Submit");
    submit.textContent = "Submit";
    datadiv.appendChild(submit);

    submit.addEventListener("click", function () {
        var initials = input.value;
        if (initials === undefined) {

            alert("Please enter initials");

        } else {
            var finalscore = {
                initials: initials,
                score: timeleft
            }

            var allscores = localStorage.getItem("allscores");
            if (allscores === null) {
                allscores = [];
            } else {
                allscores = JSON.parse(allscores);
            }
            if (finalscore.score === undefined) {
                finalscore.score = 0;
            }
            allscores.push(finalscore);
            var nextscore = JSON.stringify(allscores);
            localStorage.setItem("allscores", nextscore);
            window.location.replace("hiscore.html");
        }
    });
}












































