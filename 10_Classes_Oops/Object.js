function multipliedBy5 (num){
    return num *5
}

multipliedBy5.power = 2

console.log(multipliedBy5(5));
console.log(multipliedBy5.power);

console.log(multipliedBy5.prototype);

function User(username,score){
    this.username = username
    this.score = score
}

User.prototype.increment = function(){
    this.score++
    return this.score   // you have to return it to get the number
}

User.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const subha = new User("subha",99)
const anu = new User("anu",98)

subha.printMe()
console.log(subha.increment())
