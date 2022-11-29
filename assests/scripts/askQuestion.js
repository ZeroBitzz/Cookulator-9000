// IMPORTS
import { 
    questionsLeft, incorrectAnswer, correctAnswer, endGame
} from "./main.js"

// CORRECT ANSWER VARIABLES AND DOM VARIABLES
export let answer1 = document.getElementById("answer1")
export let answer2 = document.getElementById("answer2")
export let answer3 = document.getElementById("answer3")
export let answer4 = document.getElementById("answer4")
let questionEl = document.getElementById("game-question")
let answerArr = [answer1, answer2, answer3, answer4]
let answerInnerHtmlArr = [answer1.innerHTML, answer2.innerHTML, answer3.innerHTML, answer4.innerHTML]
let answerBoolArr = [false, false, false, false] // each value is telling which answer is correct out of the four answers(its set to all false because the correct answer hasnt been picked yet. It's picked in the for loop ahead)

let questionIndex = { // object containing questions and answers for game
    questions: [
        "Question1",
        "Question2",
        "Question3",
        "Question4",
        "Question5",
        "Question6",
        "Question7",
        "Question8",
    ],
    
    answers: [ // the first value is always the correct one( its randomized when its asked later )
        ["Correct", "incorrect1", "incorrect2", "incorrect3"],
        ["Correct", "incorrect1", "incorrect2", "incorrect3"],
        ["Correct", "incorrect1", "incorrect2", "incorrect3"],
        ["Correct", "incorrect1", "incorrect2", "incorrect3"],
        ["Correct", "incorrect1", "incorrect2", "incorrect3"],
        ["Correct", "incorrect1", "incorrect2", "incorrect3"],
        ["Correct", "incorrect1", "incorrect2", "incorrect3"],
        ["Correct", "incorrect1", "incorrect2", "incorrect3"]
    ]
} 

// REMOVES SPECIFIC ELEMENTS FROM AN ARRAY
function removeElmFromArr(removeElmArr, elmToRemove){
    let newArr = []
    for(let i=0; i<removeElmArr.length; i++){
        removeElmArr[i] !== elmToRemove ? newArr.push(removeElmArr[i]) : null
    }
    return newArr
}

// FUNCTION THAT GENERATES RANDOM QUESTION
export function askQuestion(){
    // CHECKS IF THERE ARE NO QUESTIONS LEFT TO ASK
    questionsLeft <= 0 ? endGame() : null
    
    for(let i=0; i<answerArr.length; i++){
        if(answerBoolArr[i]){
            answerArr[i].removeEventListener("click", correctAnswer)
            answerBoolArr[i] = false
        }else{
            answerArr[i].removeEventListener("click", incorrectAnswer)
        }
    }

    // RAND ARR INDEX KEEPS THE QUESTION AND ANSWER VARIABLES LINKED
    let randArrIndex = Math.floor(Math.random() * questionIndex.questions.length)

    // SETS WHICH CURRENT ARRAYS ARE BEING USED FOR QUESTION AND ANSWER, AND REMOVES THE QUESTION FROM THE ARRAY SO IT DOESNT REPEAT
    let currentAnswerArr = questionIndex.answers[randArrIndex]
    let currentQuestionArr = questionIndex.questions[randArrIndex]
    questionIndex.questions = removeElmFromArr(questionIndex.questions, currentQuestionArr)

    // SETS THE ELEMENT FOR THE QUESTION ON PAGE
    questionEl.innerHTML = currentQuestionArr
    
    // GETS THE CORRECT ANSWER IN THE ARRAY BEFORE THE ARRAY IS RANDOMIZED(WHICH IS ALWAYS THE FIRST ELEMENT IF YOU TAKE A LOOK ABOVE)
    let correctAnswerVal = currentAnswerArr[0]

    // GRABS A RANDOM ANSWER TO PUT IN BUTTON ELEMENT, THEN REMOVES THAT ELEMENT SO THERE IS NO DUPLICATES(THIS IS REPEATED FOR EVERY BUTTON WITH AN ANSWER IN IT)
    let randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    
    // FOR LOOP DETERMINING IF THE ANSWER IS CORRECT OR NOT TO ADD THE CORRESPONDING EVENT LISTENER
    for(let i= 0; i<answerArr.length; i++){
        randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
        currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
        answerArr[i].innerHTML = randAnswer
        if(answerInnerHtmlArr[i] === correctAnswerVal){
            answerBoolArr[i] = true
            answerArr[i].addEventListener('click', correctAnswer)
        }else{
            answerArr[i].addEventListener('click', incorrectAnswer)
        }
    }
    // REMOVES THE ANSWERS FROM ANSWER ARRAY IN QUESTION INDEX SO THEY DONT REPEAT
    questionIndex.answers.splice(randArrIndex, 1)
}