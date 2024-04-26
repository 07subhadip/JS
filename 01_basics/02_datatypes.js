"use strict"; // treat all js as newer version

// alert(3 + 3) // we are using nodejs not browser

console.log(3+3);   // code readability should be high

console.log("subhadip");

let name = "subhadip"
let age = 23
let isValid = true

console.table([name,age,isValid])

console.log(typeof null);       // object
console.log(typeof undefined);  // undefined

// Primitive 

// 7 types : String, Number, Boolean, BigInt, null, undefined, Symbol

// Reference (Non-Primitive)

// Object, Function, Array

const bigNumber = 43242323423523454534n // converted to BigInt
console.log(typeof bigNumber);

const oneNumber = Symbol('124')
const anotherNumber = Symbol('124')

console.log(typeof oneNumber);
console.log(oneNumber);
console.log(typeof anotherNumber);
console.log(anotherNumber);

console.log(oneNumber === anotherNumber);   // false 

// array

let gameList = ["Cricket","Football","Badminton"]
// object
// in object we can't initialize data using = sign
let myObj = {
    name: "subhadip",
    age: 23
}

//function

const myFunction = function(){
    console.log("Hello World");
}

console.table([gameList,myObj])
console.log(myFunction)
