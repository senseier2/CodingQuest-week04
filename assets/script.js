//Adding the Quiz start button for testing
var startQuizButton = document.querySelector(".Start-quiz");
var questCard = document.getElementById("Quest-card");
var quitButton = document.getElementById("QuitBtn");
var contButton = document.getElementById("continueBtn");
const timeCount = document.querySelector("div.clock");
const startTime = 60;

const optionTest = document.getElementById("optionAnswer");

//When the Start Quiz Button is Clicked add class.
startQuizButton.addEventListener("click", function(event) {
    event.preventDefault();
    questCard.classList.add("opac");
    questionArray(que_count);
    timerStart(startTime);
});


// When the Quit button is clicked this listener will remove the class list Change
quitButton.addEventListener("click", function(event) {
    event.preventDefault();
    questCard.classList.remove("opac");
});

let que_count = 0;
let counter;

const resultCard = document.querySelector(".results-card");
const resultCrd = document.querySelector(".results-card");
const restartQuiz = resultCard.querySelector(".QuitBtn");

//When the continue button is click cycle to the next question
contButton.addEventListener("click", function(event) {
    if(que_count < questions.length - 1){
        que_count++;
        questionArray(que_count);
    }else{
        console.log("questions completed");
        
    }
});

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


// A time function
function timerStart(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        --time;
    }

}


//Revealing the results at the end of the quiz.
// function showResults(){
//     questCard.classList.remove("opac");
//     title-card.classList.remove("opac");
//     resultCard.classList.add("opac");
// }

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let allOptions = optionTest.children.length;

    if(userAns == correctAnswer){
        answer.classList.add("correct");
        //Writing answer status at the bottom of the question card
        console.log("Answer is Correct");
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is Wrong");
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

