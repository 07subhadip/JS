let randomNumber = parseInt(Math.random()*100+1)

const input = document.querySelector('.guessField')
const form = document.querySelector('.form')
const output = document.querySelector('.lowOrHi')
const guessRemaining = document.querySelector('.lastResult')
const showPrevGuess = document.querySelector('.guesses')

let previousGuess = []   // keep track of all guesses
let numOfGuessDone = 1  // track the number of attempts

form.addEventListener('submit',function(e){
    e.preventDefault()  // stops the form from refreshing the page

    const guess = parseInt(input.value)
    validateAndProcessGuess(guess) //to handle the guess
});

function validateAndProcessGuess(guess){
    if (isNaN(guess || guess < 1 || guess > 100)) {
        alert(`Please enter a valid number between 1 and 100`)
    }else{
        previousGuess.push(guess)
        checkGuess(guess)       // to check if the guess is correct
        displayGuess(guess)     // to update the UI
    }
}

// this function is to check if the guess is matched or not
function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed correctly!🎉`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Your guess is too low.`)
    }else{
        displayMessage(`Your guess is too high`)
    }
}

function displayGuess(guess){
    input.value = ""        // clear the input field
    showPrevGuess.innerHTML += ` ${guess}`   // update the previous guesses display
    numOfGuessDone++    // increment the guess counter
    guessRemaining.innerHTML = `${11 - numOfGuessDone}` //update the remaining guesses display
    if (numOfGuessDone > 10) {
        displayMessage(`Game Over. The number was ${randomNumber}`)
        endGame()
    }
}

//display the message in the output element
function displayMessage(message){
    output.innerHTML = `<h3>${message}</h3>`
}


function endGame(){
    input.setAttribute('disabled','')  // disables the input field
    const newGameButton = document.createElement('button')  // creates a "Start New Game" button
    newGameButton.textContent = 'Start New Game'
    newGameButton.addEventListener('click',startNewGame)    // Adds an event listener to the button to start a new game
    form.appendChild(newGameButton)    // Adds the button to the document
}

function startNewGame(){
    console.log(`Starting new game`);
    randomNumber = parseInt(Math.random()*100+1)    // generate a new random number
    previousGuess = []      // resets the game state
    numOfGuessDone = 1
    showPrevGuess.innerHTML = ''    // clear previous guesses and feedback
    guessRemaining.innerHTML = '10'
    output.innerHTML = ''
    input.removeAttribute('disabled')   // enables the input field
    input.value = ''
    document.querySelector('button').remove()   //remove the start new game button
}
