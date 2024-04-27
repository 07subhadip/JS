const myDate = new Date()

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());


const antoherDate = new Date(2024,3,27,6,44,45) // first 3 for Date last 3 for Time & month starts from 0th index
console.log(antoherDate.toLocaleString());
console.log(antoherDate.toDateString());

const otherDate = new Date("2024-01-31")
console.log(otherDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp)

console.log(antoherDate.getTime());

let newDate = new Date()

newDate.toLocaleString('default',{
    weekday: 'long',
})

console.log(newDate);