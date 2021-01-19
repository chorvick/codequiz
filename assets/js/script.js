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

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#start");
var datadiv = document.querySelector("#datadiv");
var container = document.querySelector("#container");
var secondsLeft = 100;
var holdInterval = 0;
var ulWrite = document.createElement("ul");
var dataIndex = 0;
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
    render(qindex);
});

function render(qindex) {
    datadiv.innerHTML = "";
    ulWrite.innerHTML = "";



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
    qindex++;
    if (qindex >= data.length) {
        alldone();
        createDiv.textContent = "Your answered " + score + " out of ten questions correct !!";

    } else {
        render(qindex);

    }
    datadiv.appendChild(createDiv);

}

function alldone() {
    datadiv.innerHTML = "";
    currentTime.innerHTML = "";
}













































