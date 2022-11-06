//Adding the Quiz start button for testing
var startQuizButton = document.querySelector(".Start-quiz");
var endBtn = document.querySelector(".end-app");
var questCard = document.getElementById("Quest-card");
var quitButton = document.getElementById("QuitBtn");
var contButton = document.getElementById("continueBtn");
var initialSave = document.getElementById("userInitials");
var saveState = document.getElementById("submitQuiz");
var finalScore = document.querySelector(".userScore")
var submitBtn = document.querySelector(".submitInitials");
const timeCount = document.querySelector("div.clock");
var playerScores = document.querySelector(".player-scores");
var answerStatus = document.querySelector('.AnswerStat');

const resultCard = document.getElementById("results-card");
const titleCard = document.getElementById("title-card");
const leaderCard = document.getElementById("leader-card");

const clockVar = document.querySelector('.clock-text')

var wrongAns = -10;
var startTime = 75;

const scoreArr = [];


const optionTest = document.getElementById("optionAnswer");

//When the Start Quiz Button is Clicked add class.
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    questCard.classList.add("opacNone");
    resultCard.classList.remove("opac");
    resultCard.classList.add("opacNone");
    leaderCard.classList.add("opac");
    leaderCard.classList.remove("opacNone");
});

//starting quiz
startQuizButton.addEventListener("click", function(event) {
    event.preventDefault();
    questCard.classList.add("opac");
    questCard.classList.remove("opacNone");
    resultCard.classList.remove("opac");
    resultCard.classList.add("opacNone");
    titleCard.classList.remove("opac");
    titleCard.classList.add("opacNone");
    leaderCard.classList.add("opacNone");
    questionArray(que_count);
    timerStart(myClock = activeTime);
});

//When the End button is pressed on the Leaderboard Card
endBtn.addEventListener("click", function(event) {
    event.preventDefault();
    questCard.classList.add("opacNone");
    resultCard.classList.remove("opac");
    resultCard.classList.add("opacNone");
    titleCard.classList.add("opac");
    titleCard.classList.remove("opacNone");
    leaderCard.classList.add("opacNone");
    leaderCard.classList.remove("opac");
    cleanUp();

    //remove all children to clean leader board
    while (playerScores.firstChild) {
        playerScores.removeChild(playerScores.lastChild);
    }
});

//Revealing the results card at the end of the quiz
function showResults(){
    questCard.classList.remove("opac");
    questCard.classList.add("opacNone");
    resultCard.classList.add("opac");
    resultCard.classList.remove("opacNone");
}

//function to cleanup data
function cleanUp(){
    console.log("active time", activeTime);
    console.log("question count", que_count);
    console.log("start time", startTime);
    console.log(scoreArr);
    activeTime = 75;
    que_count = 0;
}


//when the save initials button is pressed
saveState.addEventListener("click", function(event) {
    event.preventDefault();
    
    var userData = {  //storing userData Initials and score which is the activeTime
      initials: initialSave.value,
      score:activeTime,
    };
    
    scoreArr.push(userData);
    localStorage.setItem("player scores", JSON.stringify(scoreArr));
    console.log(scoreArr)
    leaderBoard(userData);
});

let que_count = 0;
let counter;
let activeTime = 75;
let time;


const resultCrd = document.querySelector(".results-card");
const restartQuiz = document.querySelector(".QuitBtn");

//When the continue button is clicked cycle to the next question
contButton.addEventListener("click", function(event) {
    if(que_count < questions.length - 1){
        que_count++;
        questionArray(que_count);
        clearStatus();
    }else{
        console.log("questions completed");
        stopTimer();
        showResults();
        que_count = 0;
    }
});

//Clearing the question status whenever a new question is asked
function clearStatus() {
    answerStatus.textContent = '';
}


//Taking questions from the Array to add to the Dom
function questionArray(index){
    let questTest = document.getElementById("quest-box")
    
    let questP = "<p>" + questions[index].number + ". " + questions[index].question + "</p>";
    let OptionDiv = '<div class="option"><p>' + questions[index].options[0] + '</p></div>'
    + '<div class="option"><p>' + questions[index].options[1] + '</p></div>' 
    + '<div class="option"><p>' + questions[index].options[2] + '</p></div>' 
    + '<div class="option"><p>' + questions[index].options[3] + '</p></div>';
    
    questTest.innerHTML = questP;
    optionTest.innerHTML = OptionDiv;
    
    const option = optionTest.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// Timer
function timerStart(time) {
    var myClock = setInterval(function(){
         timeCount.textContent = activeTime;
         if (activeTime <= 0) {
            clearInterval(myClock)
            console.log('Your Time is UP!')
         } else {
            --time;
            --activeTime;
            console.log(activeTime);
         }
     }, 1000)
    clockVar.setAttribute("timerID",myClock)
}

// Stop Timer function
function stopTimer() {
    clearInterval(parseInt(clockVar.getAttribute('timerID')))
}

//Adding the results data to the leaderboard card.

function leaderBoard() {

    let displayedScore = JSON.parse(localStorage.getItem("player scores"));
    console.log(displayedScore + "leaderboard")
    // let playerScores = document.querySelector('.player-scores');

    for (let i = 0; i < displayedScore.length; i++) {
       // git items from local storage and append to page.
        let userScore = displayedScore[i];
        console.log(userScore);
        let liTag = document.createElement("li");
        console.log(liTag);

        liTag.innerHTML = displayedScore[i].initials + '-' + displayedScore[i].score;
        console.log(liTag);
        playerScores.appendChild(liTag);
        console.log(playerScores);
    }
}

//User options are selected and tallied, console logging.
function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let allOptions = optionTest.children.length;

    if(userAns == correctAnswer){
        answer.classList.add("correct");
        //Writing answer status at the bottom of the question card
        console.log("Answer is Correct");
        //scoreTotal++;
        answerStatus.textContent = 'Correct!'; //New* to write answer status
        finalScore.textContent = activeTime; //Write the score to the results page
    }else{
        answer.classList.add("incorrect");
        answerStatus.textContent = 'Wrong'; //New* to write Answer Status
        console.log("Answer is Wrong");
        //Subtract 10 seconds from timer
        activeTime -= 10;

}

//reset the score total when quiz is restarted - disconnected for testing
function scoreReset() {
    finalScore.textContent = 0;  //resetting the textcontent to 0
}

 //Disabling all options after an option is selected
for(let i = 0; i < allOptions; i++) {
        optionTest.children[i].classList.add("disabled");
    }

}


// Questions Array for answer options and answer key
let questions = [
    {
        number: 1,
        question: "HTML is the standard ___ language for creating Web pages.",
        answer: "markup", 
        options: [
            "scripting",
            "styling",
            "romantic",
            "markup"
        ]
    },

    {
        number: 2,
        question: "Inline styles are written within the ___ attribute",
        answer: "style", 
        options: [
            "style",
            "stylesheet",
            "hardon collider",
            "css"
        ]
    },

    {
        number: 3,
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        answer: "Function/Method", 
        options: [
            "Preprocessor",
            "Function/Method",
            "Triggering Event",
            "CPU throttling"
        ]
    },

    {
        number: 4,
        question: "Which of the following scoping types does JavaScript use?",
        answer: "Lexical", 
        options: [
            "Sequential",
            "Literal",
            "Asymetrical Recatorization",
            "Lexical"
        ]
    },

    {
        number: 5,
        question: "Which HTML tag produces a list with bullet points?",
        answer: "UL", 
        options: [
            "UL",
            "OL",
            "LI",
            "BL"
        ]
    }
];

