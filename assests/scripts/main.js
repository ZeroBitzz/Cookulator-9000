// IMPORTS
import { askQuestion } from './askQuestion.js'

// EVENT LISTENER TO START THE GAME
let initialButton = document.getElementById("initial-button")
initialButton.addEventListener("click", jsGame)


// GLOBAL DOM VARIABLES
let gameSection =               document.getElementById("game-content-section")
let incorrectAnswerElement =    document.getElementById("incorrect-score")
let correctAnswerElement =      document.getElementById("correct-score")
let endGameSectionElm = document.getElementById("end-game-section")
let scoreElement = document.getElementById("score-span")
let retryButtonElement = document.getElementById("retry-button")

// EXPORTS FOR ASK QUESTIONS MODULE AND THIS ONE
export let questionsLeft = 8
export let incorrectAnswers = 0
export let correctAnswers = 0

// RELOAD PAGE HELPER FUNCTION
function reloadPage(){location.reload()} // reloads page when called

// FUNCTIONS FOR DETERMINING CORRECT AND INCORRECT ANSWERS
export function incorrectAnswer(){ // function if answer selected is incorrect
    questionsLeft -= 1
    incorrectAnswers += 1
    askQuestion()
}

export function correctAnswer(){ // function if answer selected is correct
    questionsLeft -= 1
    correctAnswers += 1
    askQuestion()
}  

// MAIN JS GAME FUNCTION
function jsGame(){
    document.getElementById("initial-screen-section").style.display = "none" // removes initial screen
    gameSection.style.display = "flex" // displays game screen
    askQuestion() // starts asking questions(see askquestion in other file for details)
}

// END GAME FUNCTION
export function endGame(){
    retryButtonElement.addEventListener("click", reloadPage) // reloads the page when button is clicked
    endGameSectionElm.style.display = "flex" // displays end game section
    gameSection.style.display = "none" // hides main game section
    scoreElement.style.display = "flex" // displays score element
    correctAnswerElement.innerHTML = "correct answers: " + correctAnswers // correct answers element
    incorrectAnswerElement.innerHTML = "incorrect answers: " + incorrectAnswers // incorrect answers element
}
