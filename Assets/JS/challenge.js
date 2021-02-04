var gameBody = document.getElementById("game");

var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("endGame");
var challengesEL = document.getElementById("challenges");
var challengeTimer = document.getElementById("timer");
var startChallengeBtn = document.getElementById("startbtn");

var startChallengeDiv = document.getElementById("start");
var highscoreContainer = document.getElementById("highScoreCont");
var highscoreDiv = document.getElementById("highScorePage");

var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highScoreInitials");
var endChallengeBtn = document.getElementById("endChallenge");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("Score");

var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//challengeX and response array
var theChallenges = [{
    challengeX : "Kiss a stranger! But don't be a creep, consent is required!",
    responseA : "PASS, TOO EASY!!!",
    responseB : "CHALLENGE COMPLETE",
    responseC: "BUT COVID!",
    responseD: "CHALLENGE REJECTED",
    correctResponse: "b"},
    {
    challengeX: 'Start dancing the ELECTRIC SLIDE to the song that is currently playing, at least one other person must join!',
    responseA: "TOO EASY!",
    responseB: "I DON'T KNOW THE ELECTRIC SLIDE",
    responseC: "NO ONE JOINED",
    responseD: "I'M A CHICKEN $HIT!",
    correctResponse: "a"},
    {
    challengeX: "START A CHANT (DOESN'T MATTER WHAT), AND GET PEOPLE TO JOIN!",
    responseA: "EHHHH...PASS!",
    responseB: "I NEED MORE BOOZE FOR THIS ONE",
    responseC: "TOO SHY, NOPE",
    responseD: "GOT IT!!!",
    correctResponse: "d"},
    {
    challengeX: 'DANCE ON A TABLE OR ANY ELEVATED SURFACE FOR THE REMAINING AMOUNT OF TIME!',
    responseA: "WHERE'S THE CHALLENGE FOOL!",
    responseB: "I DON'T WORK FOR FREE",
    responseC: "Hell nah to the nah nah nah...",
    responseD: "Pero why? No thanks!",
    correctResponse: "a"},
];
    //global variables
    var finalChallengeI = theChallenges.length;
    var currentChallengeI = 0;
    var timeRemaining = 1000;
    var timeInterval;
    var score = 0;
    var correct;

function generateChallenge(){
    gameoverDiv.style.display = "none";
    if (currentChallengeI === finalChallengeI) {
        return showScore();
    }
    var currentChallenge = theChallenges[currentChallengeI];
    challengesEL.innerHTML = "<p>" + currentChallenge.challengeX + "</p>";
    buttonA.innerHTML = currentChallenge.responseA;
    buttonB.innerHTML = currentChallenge.responseB;
    buttonC.innerHTML = currentChallenge.responseC;
    buttonD.innerHTML = currentChallenge.responseD;
}; 
function startChallenge(){
    gameoverDiv.style.display = "none";
    startChallengeDiv.style.display = "none";
    generateChallenge();
    timeInterval = setInterval(function(){
        timeRemaining--;
        challengeTimer.textContent = "TIME REMAINING: " + timeRemaining;
        if(timeRemaining <= 0) {
            clearInterval(timeInterval);
            showScore();
        }
    }, 1000);
    gameBody.style.display = "block";
}
function showScore(){
    gameBody.style.display= "none";
    gameoverDiv.style.display= "flex";
    clearInterval(timeInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You completed " + score + " challenges out of " + theChallenges.length + "!";
}


document.querySelector(".delete").addEventListener("click",function(){
    document.getElementById("modalPopUp").style.display="none";
})

submitScoreBtn.addEventListener("click", function highscore(){

    if(highscoreInputName.value === "") {
        document.getElementById("modalPopUp").style.display="block";       
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var cuurentHighscore = {
            name: currentUser,
            score : score
        };
        gameoverDiv.style.display= "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endChallengeBtn.style.display = "flex";

        savedHighscores.push(cuurentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscore();
    }
});
function generateHighscore (){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var scores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i = 0; i <scores.length; i++) {
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
         newName.textContent = scores[i].name;
         newScore.textContent = scores[i].score;
         highscoreDisplayName.appendChild(newName);
         highscoreDisplayScore.appendChild(newScore);
    
}
};
function showHighscore(){
    startChallengeDiv.style.display = "none";
    gameoverDiv.style.style = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endChallengeBtn.style.display = "flex";
    generateHighscore();
}

function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}
function replayChallenge(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startChallengeDiv.style.display = "flex";
    timeRemaining = 1000;
    score = 0;
    currentChallengeI = 0;
}

function checkResponse (answer){
    correct = theChallenges[currentChallengeI].correctResponse;

    if(answer === correct && currentChallengeI !== finalChallengeI){
        score++;
        currentChallengeI++;
        generateChallenge();
    }else if(answer !==correct && currentChallengeI !== finalChallengeI){
        currentChallengeI++;
        generateChallenge();
        timeRemaining -=200
    }else{
        showScore();
    }
};


startChallengeBtn.addEventListener("click", startChallenge)