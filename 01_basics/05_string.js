const name = "Subhadip Hensh"
let repoCount = 19

console.log(`My name is ${name} and My GitHub repoCount is ${repoCount}`);

// another way to declare a string

const myName = new String("Anusuya")

console.log(myName)
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.charAt(4));      // it starts count from 0

console.log(myName.indexOf('y'));

console.log(myName.substring(0,4));     // starts from 0 th index and upto n-1 index (4-1 = 3rd index)

console.log(myName.slice(0,5));     // can perform reverse

const anotherName = "    Subhanu     "

console.log(anotherName);
console.log(anotherName.trim());        // removes white space 

const url = "https://subhadip.com/subhadip%45SH"

console.log(url.replace("%45","-"));

const newString = "Subhadip-Anusuya"

console.log(newString.includes("Anu"));
console.log(newString.split("-"));