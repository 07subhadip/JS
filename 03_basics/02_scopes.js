
let a = 100         // global scope
// var c = 4343

if (true) {
    let a = 34      // block scope
    const  b = 343
    // var c = 4343
    // c = 34343

    console.log("INNER : ",a);
}

console.log("OUTER : ",a);
// console.log(b);
// console.log(c);


// nested fumctions

function one(){
    const username = "subhadip"

    function two(){
        const email = "subhadiphensh31102000@gmail.com"
        console.log(username);
    }

    // console.log(email);
    two()
}

one()

if (true) {
    const variable = "name"
    if (true) {
        const name = "subhadip"
        console.log(`Your ${variable} is ${name}`);
    }
    // console.log(name);
}

// console.log(variable);

function addOne(num){
    return num+1
}

console.log(addOne(5)
)
const addTwo = function(num){
    return num+2
}

console.log(addTwo(10))