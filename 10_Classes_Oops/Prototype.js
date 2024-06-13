const myHeroes = ['Spider-Man','Thor']

const myFamily = {
    me : "subhadip hensh",
    wife : "anusuya ghosal",
    mother : "mithu hensh",
    father : "dipak hensh"
}

Object.prototype.myFunc = function(){
    console.log("this is available here");
}

Array.prototype.othMyFunc = function(){
    console.log("subhadip says hello");
}

myFamily.myFunc()
myHeroes.myFunc()
// myFamily.othMyFunc()]
myHeroes.othMyFunc()


// inheritance

const User = {
    username: "subha",
    email:"subhad@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeacherSupport = {
    isAvailable : false
}

const  TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(Teacher,TeacherSupport)


let anotherUserName = "Subhadip Anusuya                "

String.prototype.trueLength = function(){
    // console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength()
"subhadip hensh  ".trueLength()