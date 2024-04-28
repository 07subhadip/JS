const number = 300

console.log(number);
console.log(number.toString())

const num = new Number(400)
console.log(num);
console.log(num.toString());
console.log(typeof num.toString())
console.log(num.toString().length);

console.log(number.toFixed(2));

const otherNumber = 2334.363        

console.log(otherNumber.toPrecision(3));        // 2.33e+3

const anotherNumber = 1000000

console.log(anotherNumber.toLocaleString());

console.log(Number.MIN_VALUE)

//***********************MATHS****************************** */

console.log(Math.abs(-45));
console.log(Math.floor(Math.random()*100));     // 1-99 random number
console.log(Math.random());
console.log(Math.round(4.7));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.max(3,4,5,6,43,45,32));
console.log(Math.min(3,4,5,6,43,45,32));

const min = 23
const max = 234

console.log(Math.floor(Math.random()*(max-min))+min);       // this line is for getting random numbers within a particular range
// to avoid the 0th value we can add 1 --> (max-min+1)

