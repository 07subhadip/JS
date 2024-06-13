class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)   // to understand this the behind the scene is in Call.js file
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const subha = new Teacher("subhadip","subhadip@gmail.com",123) 

subha.addCourse()

const anu = new User("Anusuya")

anu.logMe()

subha.logMe()

console.log(subha instanceof User);     // true
console.log(subha instanceof Teacher);  //true

console.log(anu instanceof User);       // true
console.log(anu instanceof Teacher);    // false