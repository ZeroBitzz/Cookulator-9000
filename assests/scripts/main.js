// IMPORTS
import  {askQuestion}  from './askQuestion.js'


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


// the API

function showRecipe(country) {
        var textPopUp = document.getElementById("random-recepie-title")
        var textPopIng = document.getElementById("random-recepie-ing")
        var textPopMes = document.getElementById("random-recepie-mes")
        var bulkText = document.getElementById("howToDo")
            fetch('https://www.themealdb.com/api/json/v1/1/random.php?key=1')
            .then(function (response) {
                  return response.json()
                })
                .then(function (data) {
                // Use the console to examine the response
                console.log(data);
                
                const rawDataJSON = (data);
                
                var title = document.createElement("h4");
                var ingredients = document.createElement("h4");
                var recipeBulk = document.createElement("h5");
                var measurements = document.createElement("h6");

                title.innerHTML = data.meals[0].strMeal;
                ingredients.innerHTML = data.meals[0].strIngredient1;
                measurements.innerHTML = data.meals[0].strMeasure1;
                recipeBulk.innerHTML = data.meals[0].strInstructions;

                textPopUp.append(title);
                textPopIng.append(ingredients);
                textPopMes.append(measurements);
                bulkText.append(recipeBulk);
            })
            }
            // fetch(`https://restcountries.com/v2/alpha/${country}`)
            // .then(function (response) {
            //   return response.json()
            // })
            // .then(function (data) {
            //   console.log(data, "country info")
             
            //     var ingredients = document.createElement("div")
            //     var recipeBulk = document.createElement("p")

            //     ingredients.innerHTML = `<img src=${data.flag}></img>`
            //     recipeBulk.textContent = data.name

            //     textPopUp.append(recipeBulk)
            //     textPopUp.append(ingredients)
    //         })
    // }
    
showRecipe()
