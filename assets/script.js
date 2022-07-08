//Adding the Quiz start button for testing
var startQuizButton = document.querySelector(".Start-quiz");
var questCard = document.getElementById("Quest-card");
var quitButton = document.getElementById("QuitBtn");
var contButton = document.getElementById("continueBtn");


//When the Start Quiz Button is Clicked add class.
startQuizButton.addEventListener("click", function(event) {
    event.preventDefault();
    questCard.classList.add("opac");
    questionArray(que_count);

});

// When the Quit button is clicked this listener will remove the class list Change
quitButton.addEventListener("click", function(event) {
    event.preventDefault();
    questCard.classList.remove("opac");
});

let que_count = 0;

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
    let optionTest = document.getElementById("optionAnswer")
    let questP = "<p>" + questions[index].question + "</p>";
    let OptionDiv = '<div class="option1"><p>' + questions[index].options[0] + '</p></div>'
    + '<div class="option2"><p>' + questions[index].options[1] + '</p></div>' 
    + '<div class="option3"><p>' + questions[index].options[2] + '</p></div>' 
    + '<div class="option4"><p>' + questions[index].options[3] + '</p></div>';
    
    questTest.innerHTML = questP;
    optionTest.innerHTML = OptionDiv;
}








// Questions Array for answer options and answer key
let questions = [
    {
        number: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language", 
        options: [
            "Hyper Text Markup Language",
            "Hippy Miner in a Cave Language",
            "Some Random text",
            "Banna Cream Pie Sundea"
        ]
    },

    {
        number: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet", 
        options: [
            "Cinnamon Classic Style Sheet",
            "I've struck the wrong answer",
            "Oh no what is this",
            "Cascading Style Sheet"
        ]
    },

    {
        number: 3,
        question: "Test Question1?",
        answer: "Test Answer Correct", 
        options: [
            "Correct Answer",
            "Incorrect Answer",
            "Incorrect Answer 2",
            "Incorrect Answer 3"
        ]
    }
];

