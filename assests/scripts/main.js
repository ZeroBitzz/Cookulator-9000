// IMPORTS
import { askQuestion } from './askQuestion.js'


// EVENT LISTENER TO START THE GAME
let initialButton = document.getElementById("initial-button")
initialButton.addEventListener("click", jsGame)


// GLOBAL DOM VARIABLES
let gameSection = document.getElementById("game-content-section")
let incorrectAnswerElement = document.getElementById("incorrect-score")
let correctAnswerElement = document.getElementById("correct-score")
let endGameSectionElm = document.getElementById("end-game-section")
let scoreElement = document.getElementById("score-span")
let retryButtonElement = document.getElementById("retry-button")

// EXPORTS FOR ASK QUESTIONS MODULE AND THIS ONE
export let questionsLeft = 8
export let incorrectAnswers = 0
export let correctAnswers = 0

// RELOAD PAGE HELPER FUNCTION
function reloadPage() { location.reload() } // reloads page when called

// FUNCTIONS FOR DETERMINING CORRECT AND INCORRECT ANSWERS
export function incorrectAnswer() { // function if answer selected is incorrect
    questionsLeft -= 1
    incorrectAnswers += 1
    askQuestion()
}

export function correctAnswer() { // function if answer selected is correct
    questionsLeft -= 1
    correctAnswers += 1
    askQuestion()
}

// MAIN JS GAME FUNCTION
function jsGame() {
    document.getElementById("initial-screen-section").style.display = "none" // removes initial screen
    gameSection.style.display = "flex" // displays game screen
    askQuestion() // starts asking questions(see askquestion in other file for details)
}

// END GAME FUNCTION
export function endGame() {
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

            var bearStuffie = []
            bearStuffie.push(data.meals[0].strIngredient1)
            bearStuffie.push(data.meals[0].strIngredient2)
            bearStuffie.push(data.meals[0].strIngredient3)
            bearStuffie.push(data.meals[0].strIngredient4)
            bearStuffie.push(data.meals[0].strIngredient5)
            bearStuffie.push(data.meals[0].strIngredient6)
            bearStuffie.push(data.meals[0].strIngredient7)
            bearStuffie.push(data.meals[0].strIngredient8)
            bearStuffie.push(data.meals[0].strIngredient9)
            bearStuffie.push(data.meals[0].strIngredient10)
            bearStuffie.push(data.meals[0].strIngredient11)
            bearStuffie.push(data.meals[0].strIngredient12)
            bearStuffie.push(data.meals[0].strIngredient13)
            bearStuffie.push(data.meals[0].strIngredient14)
            bearStuffie.push(data.meals[0].strIngredient15)
            bearStuffie.push(data.meals[0].strIngredient16)
            bearStuffie.push(data.meals[0].strIngredient17)
            bearStuffie.push(data.meals[0].strIngredient18)
            bearStuffie.push(data.meals[0].strIngredient19)
            bearStuffie.push(data.meals[0].strIngredient20)


            // const rawDataJSON = (data);

            var title = document.createElement("h4");
            var ingredients = document.createElement("h4");
            var recipeBulk = document.createElement("h5");
            var measurements = document.createElement("h6");

            var ingredientsToStr = "";
            for (let i = 0; i <= bearStuffie.length; i++) {
                if (bearStuffie[i] !== "" && bearStuffie[i] !== " " && bearStuffie[i] !== null && bearStuffie[i] && undefined) {

                    ingredientsToStr += bearStuffie[i] + ", "
                }
            }
            console.log(ingredientsToStr)

            title.innerHTML = data.meals[0].strMeal;
            ingredients.innerHTML = ingredientsToStr;
            measurements.innerHTML = data.meals[0].strMeasure1;
            recipeBulk.innerHTML = data.meals[0].strInstructions;

            textPopUp.append(title);
            textPopIng.append(ingredients);
            textPopMes.append(measurements);
            bulkText.append(recipeBulk);
        })
}

showRecipe()


// THE CODE FROM Q
// fetch("https://www.themealdb.com/api/json/v1/1/random.php?key=1")
// .then(response => response.json())
// .then(data => {
//     meal = data.meals[0];
//     var ingredients = [];

//     for(const key in meal) {
//         for(var i = 1; i <= 20; i++) {
//             if(key === `strIngredient${i}` && meal[key] != "" && meal[key] != null && meal[key] != " ") {
//                 ingredients.push(meal[key]);
//             }
//         }
//     }

//     console.log(ingredients);
// });