// IMPORTS
import { askQuestion } from './askQuestion.js'

// EVENT LISTENER TO START THE GAME
let initialButton = document.getElementById("initial-button")
initialButton.addEventListener("click", jsGame)


// GLOBAL DOM VARIABLES
let gameSection =               document.getElementById("game-content-section")
let incorrectAnswerElement =    document.getElementById("incorrect-score")
let correctAnswerElement =      document.getElementById("correct-score")

// EXPORTS FOR ASK QUESTIONS MODULE AND THIS ONE
export let questionsLeft = 8
export let incorrectAnswers = 0
export let correctAnswers = 0

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
    document.getElementById("initial-screen-section").style.display = "none"
    gameSection.style.display = "flex"
    askQuestion()   
}

// END GAME FUNCTION, RELOAD PAGE HELPER FUNCTION, AND VARIABLES FOR END GAME FUNCTION
function reloadPage(){location.reload()}
let endGameSectionElm = document.getElementById("end-game-section")
let scoreElement = document.getElementById("score-span")
let retryButtonElement = document.getElementById("retry-button")
export let endScore
export function endGame(){
    localStorage.setItem('scoreEntered', 'no') //this line is so you only can enter your score once every time you play. Also used in addHighscore.js
    endScore = correctAnswers
    retryButtonElement.addEventListener("click", reloadPage) // reloads the page when button is clicked
    endGameSectionElm.style.display = "flex"
    gameSection.style.display = "none"
    scoreElement.style.display = "flex"
    correctAnswerElement.innerHTML = "correct answers: " + correctAnswers
    incorrectAnswerElement.innerHTML = "incorrect answers: " + incorrectAnswers
}