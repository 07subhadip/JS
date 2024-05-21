# Projects related to DOM

## Project link
[click here](https://github.com/07subhadip/JS/tree/main/07_Projects)

# Solution code

## Project 1 
### 01 &rarr; ColorChanger.js

``` Javascript
// Project 1 ---> ColorChanger 

const buttons = document.querySelectorAll('.button')
// console.log(button);
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id === "grey"){
            body.style.backgroundColor = "grey"
            h1.style.color = "white"
            h2.style.color = "white"
            buttons.forEach(function (button){
                button.style.borderColor = "black";
            })
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = "white"
            h1.style.color = "black"
            h2.style.color = "black"
            buttons.forEach(function (button){
                button.style.borderColor = "black";
            })
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = "blue"
            h1.style.color = "yellow"
            h2.style.color = "yellow"
            buttons.forEach(function (button){
                button.style.borderColor = "black";
            })
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = "yellow"
            h1.style.color = "black"
            h2.style.color = "black"
            buttons.forEach(function (button){
                button.style.borderColor = "black";
            })
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor = "purple"
            h1.style.color = "yellow"
            h2.style.color = "yellow"
            buttons.forEach(function (button){
                button.style.borderColor = "black";
            })
        }   
    })
});
```

## Project 2
### 02 &rarr; BMI Calculator

```javascript
console.log("Project 2 ---> ")

const form  = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter a valid height"
    }else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi} \u2192 Under Weight</span>`
        }else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>${bmi} \u2192 Normal Range</span>`
        }else if(bmi > 24.9){
            results.innerHTML = `<span>${bmi} \u2192 Overweight</span>`
        } 
    }
});
```

## Project 3
### 03 &rarr; Digital Clock

```javascript
const clock = document.querySelector("#Clock")
// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);
```
## Project 4
### 04 &rarr; Guess The Number

```javascript
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
```