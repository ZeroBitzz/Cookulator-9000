// IMPORTS
import { askQuestion, answer1, answer1Correct, answer2Correct, answer3Correct, answer4Correct,
    answer2, answer3, answer4 } from './askQuestion.js'

// EVENT LISTENER TO START THE GAME
let initialButton = document.getElementById("initial-button")
initialButton.addEventListener("click", jsGame)


// GLOBAL VARIABLES
let highscoresSection =         document.getElementById("highscores-section")
let timerElement =              document.getElementById("time")
let timerScore =                document.getElementById("time-score")
let gameSection =               document.getElementById("game-content-section")
let incorrectAnswerElement =    document.getElementById("incorrect-score")
let correctAnswerElement =      document.getElementById("correct-score")
let timer = 300
let timeInterval

// EXPORTS FOR ASK QUESTIONS MODULE AND THIS ONE
export let questionsLeft = 7
export let incorrectAnswers = 0
export let correctAnswers = 0

export function incorrectAnswer(){ // function if answer selected is incorrect
    timer -= 50
    questionsLeft -= 1
    incorrectAnswers += 1
    askQuestion()
}

export function correctAnswer(){ // function if answer selected is correct
    timer += 20
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
let initialsForm = document.getElementById("initials-form")
let initialsFormSubmitButton = document.getElementById("submit-button")
let endGameSectionElm = document.getElementById("end-game-section")
let scoreElement = document.getElementById("score-span")
let retryButtonElement = document.getElementById("retry-button")
export let endTime, endScore
export function zeroEndTime(){endTime = 0} // function that sets endtime to zero
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