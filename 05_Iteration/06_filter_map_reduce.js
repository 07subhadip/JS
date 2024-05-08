const myArray = ["thor","spiderman","superman"]

let newVariable = myArray.forEach((items)=>{
    return items
})

console.log(newVariable);

const myNum = [1,2,3,4,5,6,7,8,9]

const store = myNum.filter( (items)=>{
    return items>5
})

console.log(store);

const anotherStore = myNum.filter( (n)=> n>5 )

console.log(anotherStore);