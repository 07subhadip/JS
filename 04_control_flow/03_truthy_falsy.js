const user = ""

if(user){
    console.log(user);
}

const anotherUser = []

if(anotherUser){
    console.log(anotherUser);
}

//falsy values
// "", 0 , -0 , BigInt 0n , false , null , undefined , NaN

// except all the falsy values all other values are called truthy values

// " " , "0" ,"false" , [] , {} , true , function(){}

const newArray = []

if(newArray.length === 0){
    console.log(`Array is empty`);
}

const newObject = {}

if(Object.keys(newObject).length === 0){
    console.log(`Object is empty`);
}

// Nullish Coalescing Operator (??) : Null Undefined

const val1 = null
const result1 = val1 ?? "default value"
console.log(result1);

const val2 = undefined
const result2 = val2 ?? "default value"
console.log(result2);

const val3 = ""
const result3 = val3 ?? 10
console.log(result3);

const val4 = 0
const result4 = val4 ?? 20
console.log(result4);

const val5 = null
const result5 = val5 ?? undefined ?? 100
console.log(result5);

// ternary operator

const price = 100
//condition ? true value : false value
price<50 ? console.log(true):console.log(false)