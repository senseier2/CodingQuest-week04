//Adding the Quiz start button for testing
var startQuizButton = document.querySelector(".Start-quiz");
var questCard = document.getElementById("Quest-card");
var quitButton = document.getElementById("QuitBtn");

//When the Start Quiz Button is Clicked add class.
startQuizButton.addEventListener("click", function(event) {
    // event.preventDefault();
    questCard.classList.add("opac");
    console.log(questCard);
});

// When the Quit button is clicked this listener will remove the class list Change
quitButton.addEventListener("click", function(event) {
    questCard.classList.remove("opac");
});










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
    }

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
    }

    {
        number: 1,
        question: "Test Question1?",
        answer: "Test Answer Correct", 
        options: [
            "Correct Answer",
            "Incorrect Answer",
            "Incorrect Answer 2",
            "Incorrect Answer 3"
        ]
    }
]

