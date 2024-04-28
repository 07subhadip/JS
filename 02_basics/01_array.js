let myArr = [1,2,3,4,"subhadip"]

console.log(myArr);

console.log(myArr[1]);

let anotherArr = new Array(12,3,4,5,5)

console.log(anotherArr);

anotherArr.push("subhadip")
console.log(anotherArr);
anotherArr.pop()
console.log(anotherArr);
myArr.shift()
console.log(myArr); // removes element from the start
myArr.unshift(12)
console.log(myArr); // add element at the start

console.log(myArr.includes(200));

console.log(myArr.indexOf(12))

const newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr); // string

// let myArr = [1,2,3,4,"subhadip"]

console.log(myArr)
const myNewArr = myArr.slice(1,3)   // will select the given elements excluding 3rd element
console.log("A",myNewArr);
const myNewArr2 = myArr.splice(1,3) // will cut the give elements including the 3rd element
console.log("B",myNewArr2);
console.log(myArr);                 // array has been cut and reduced in size and print-> [12,"subhadip"]