// IMPORTS
import { 
    questionsLeft, incorrectAnswer, correctAnswer, endGame
} from "./main.js"

// CORRECT ANSWER VARIABLES AND DOM VARIABLES
export let answer1Correct, answer2Correct, answer3Correct, answer4Correct = false // boolean determining which one of the questions is correct. It's reset here so they don't overlap
export let answer1 = document.getElementById("answer1")
export let answer2 = document.getElementById("answer2")
export let answer3 = document.getElementById("answer3")
export let answer4 = document.getElementById("answer4")
let questionEl = document.getElementById("game-question")

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
        if(removeElmArr[i] === elmToRemove){
            continue
        }
        else{
            newArr.push(removeElmArr[i])
        }
    }
    return newArr
}

// FUNCTION THAT GENERATES RANDOM QUESTION
export function askQuestion(){
    // CHECKS IF THERE ARE NO QUESTIONS LEFT TO ASK
    questionsLeft <= 0 ? endGame() : null
    
    // RESETS EVENT LISTENERS FOR ANSWER BUTTONS
    if(answer1Correct){
        answer1.removeEventListener("click", correctAnswer)
        answer1Correct = false
    }else{answer1.removeEventListener("click", incorrectAnswer)}

    if(answer2Correct){
        answer2.removeEventListener("click", correctAnswer)
        answer2Correct = false

    }else{answer2.removeEventListener("click", incorrectAnswer)}

    if(answer3Correct){
        answer3.removeEventListener("click", correctAnswer)
        answer3Correct = false
    }else{answer3.removeEventListener("click", incorrectAnswer)}

    if(answer4Correct){
        answer4.removeEventListener("click", correctAnswer)
        answer4Correct = false
    }else{answer4.removeEventListener("click", incorrectAnswer)}

    // RAND ARR INDEX KEEPS THE QUESTION AND ANSWER VARIABLES LINKED
    let randArrIndex = Math.floor(Math.random() * questionIndex.questions.length)

    // SETS WHICH CURRENT ARRAYS ARE BEING USED FOR QUESTION AND ANSWER, AND REMOVES THE QUESTION FROM THE ARRAY SO IT DOESNT REPEAT
    let currentAnswerArr = questionIndex.answers[randArrIndex]
    let currentQuestionArr = questionIndex.questions[randArrIndex]
    questionIndex.questions = removeElmFromArr(questionIndex.questions, currentQuestionArr)

    // SETS THE ELEMENT FOR THE QUESTION ON PAGE
    questionEl.innerHTML = currentQuestionArr
    
    // GETS THE CORRECT ANSWER IN THE ARRAY BEFORE THE ARRAY IS RANDOMIZED(WHICH IS ALWAYS THE FIRST ELEMENT IF YOU TAKE A LOOK ABOVE)
    let correctAnswerVal = 0
    correctAnswerVal = currentAnswerArr[0]

    // GRABS A RANDOM ANSWER TO PUT IN BUTTON ELEMENT, THEN REMOVES THAT ELEMENT SO THERE IS NO DUPLICATES(THIS IS REPEATED FOR EVERY BUTTON WITH AN ANSWER IN IT)
    let randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer1.innerHTML = randAnswer

    // CHECKS IF THE ANSWER IS THE CORRECT ANSWER TO ADD CORRESPONDING EVENT LISTENER(REPEATED FOR EVERY BUTTON)
    if(answer1.innerHTML === correctAnswerVal){
        answer1Correct = true
        answer1.addEventListener("click", correctAnswer)
    }else{answer1.addEventListener("click", incorrectAnswer)}
    

    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer2.innerHTML = randAnswer
    if(answer2.innerHTML === correctAnswerVal){
        answer2Correct = true
        answer2.addEventListener("click", correctAnswer)
    }else{answer2.addEventListener("click", incorrectAnswer)}
    
    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer3.innerHTML = randAnswer
    if(answer3.innerHTML === correctAnswerVal){
        answer3Correct = true
        answer3.addEventListener("click", correctAnswer)
    }else{answer3.addEventListener("click", incorrectAnswer)}
    
    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer4.innerHTML = randAnswer
    if(answer4.innerHTML === correctAnswerVal){
        answer4Correct = true
        answer4.addEventListener("click", correctAnswer)
    }else{answer4.addEventListener("click", incorrectAnswer)}
    
    // REMOVES THE ANSWERS FROM ANSWER ARRAY IN QUESTION INDEX SO THEY DONT REPEAT
    questionIndex.answers.splice(randArrIndex, 1)
}