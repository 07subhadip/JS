let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement(`p`)

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame == true) {
    submit.addEventListener('click',function(e){
        e.preventDefault()

        const guess = parseInt(userInput.value)
        validateGuess(guess)
        if (numGuess > 10) {
            displayGuess(guess)
            displayGuess(`Game Over, Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }else if (guess<1) {
        alert('Please enter a valid number > 1')
    }else if (guess>100) {
        alert('Please enter a valid number <= 100')
    }else{
        prevGuess.push(guess)
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMsg(`You Guessed it Right...`)
        endGame()
    }else if(guess < randomNumber){
        displayMsg(`Number is too low`)
    }else if(guess > randomNumber){
        displayMsg(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += ` ${guess} ` 
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButoon = document.querySelector('#newGame')
    newGameButoon.addEventListener('click',function (e) {
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}