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