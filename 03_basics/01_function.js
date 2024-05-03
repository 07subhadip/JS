function sayMyName(){
    console.log("S")
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
}

sayMyName()

sayMyName()

function addTwoNumbers(number1 , number2){
    return number1+number2;
    // console.log("hello world")  // this code will not execute after returning value
}

console.log(addTwoNumbers(12,"a"))

function loggedIn(username){
    return `${username} just logged in`
}

console.log(loggedIn("subhadip"));

function isLoggedIn(personName = "Anu"){
    if(!personName){
        return
    }
    return `${personName} just logged in.`
}

console.log(isLoggedIn(undefined))

// rest operator for accessing multiple values in function

function calculateCart(val1,val2,...num1){
    return num1
}

console.log(calculateCart(100,200,800,500))     // it will return an array

const user = {
    name: "subha",
    age: 23
}

function accessObject(anyobject){
    return `Username is ${anyobject.name} and age is ${anyobject.age}`
}

console.log(accessObject(user))
console.log(accessObject({
    name: "Anusuya",
    relation: "my wife",
    age: 23
}))

const myArray = [100,200,300]

function getArray(anArray){
    return anArray[2]
}

console.log(getArray(myArray));

console.log(getArray([200,400,600,500]));