# Projects related to DOM

## project link
[click here]()

# Solution code

## project 1 
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