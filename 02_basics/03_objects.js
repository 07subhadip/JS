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

anotherObj.greeting = function (){
    console.log("hello world");
}

anotherObj.greetingTwo = function (){
    console.log(`Hello , Good Evening, ${this.name}`);
}
console.log(anotherObj.greeting());
console.log(anotherObj.greeting);
console.log(anotherObj.greetingTwo());


// greeting()
// cheking i it is changing in github also or not

// git filter-branch --env-filter 'if [ "$GIT_AUTHOR_EMAIL" = "suhadiphensh31102000@gmail.com" ]; then
// GIT_AUTHOR_EMAIL=subhadiphensh31102000@gmail.com;
// export GIT_AUTHOR_EMAIL;
// fi' -- --all

// this line is to change the user email 
