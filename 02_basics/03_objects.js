// singleton

// Object.create

// object literals

const mySym = Symbol("key1")
let myData = {
    "full name": "Subhadip Hensh",
    name: "Subhadip",
    [mySym]: "Anusuya",
    age: 23,
    student: true,
    loggedInDays: ["sunday","friday"]
}

console.log(myData.age)
console.log(myData["name"]);    // another method to access object
console.log(myData["full name"]);   // can not access this data using .
console.log(myData[mySym]);

myData.student = false
Object.freeze(myData)       // After that no change will occur in the objcet
myData.student = true

console.log(myData);

let anotherObj = {
    name: "Anu"
}

anotherObj.greeting = function greeting{
    console.log("hello world");
}

console.log(anotherObj.greeting());
