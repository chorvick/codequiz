//// js page for high score table
///set variables 
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");


///clear event listener to erase hi scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
///check  pull from local storage
var allscores = localStorage.getItem("allscores");
allscores = JSON.parse(allscores);

if (allscores != null) {

    for (var i = 0; i < allscores.length; i++) {
        var createli = document.createElement("li");
        createli.textContent = allscores[i].initials + " " + allscores[i].score;
        highScore.appendChild(createli);
    }
}

addEventListener("click", function () {
    window.location.replace("index.html");
});





