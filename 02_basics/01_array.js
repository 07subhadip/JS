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

console.log("A",myArr)
const myNewArr = myArr.sloce