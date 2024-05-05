const userPage = {
    userName: "Subhadip",
    fees: 8000,
    welcomeFunction: function(){
        console.log(`Welcome ${this.userName} , to JS`);

        console.log(this);
    }
}

console.log(this)

userPage.welcomeFunction()
userPage.userName = "Anu"
userPage.welcomeFunction()
console.log(this);


function check(){
    const username2 = "subhadip"
    console.log(this.username2);
}

check()

const anotherCheck = () => {
    const age = 56
    console.log(this.age);
}

anotherCheck()


// arrow functions

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))

const addOne = (num1,num2) => num1+num2

console.log(addOne(3,4))

const returnObj = () => ({name: "Subhadip",
    username: "07subhadip"
})

console.log(returnObj());

