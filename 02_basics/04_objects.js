// singleton objects declaration using constructor

const newUser = new Object()

newUser.name = "Anusuya"

console.log(newUser);

const anotherUser = {
    fullName : {
        userName : {
            name: "Subhadip",
            title : "Hensh",
            className: {
                nameofclass: "MSc Computer Science"
            }
        }
    }
}

console.log(anotherUser.fullName.userName);


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

const obj3 = Object.assign({},obj1,obj2)        // {} is an empty object and rest are the source objects

// even we can use sprade operator here also

const obj4 = {...obj1,...obj2}
console.log(obj3);
console.log("obj4 : ",obj4);
// just one comment

const User = [
    {
        name: "subhadip",
        user: true
    },
    {
        name: "Anu",
        user: true
    },
    {
        name: "anupama",
        user: false
    }
]

console.log(User[2].user);
const anobject = {
    name: "subha",
    age: 23,
    student: true
}
console.log(Object.keys(anobject));             // return keys in an array
console.log(Object.values(anobject));           // return values in an array
console.log(Object.entries(anobject));          // convert each key and values in array
console.log(anobject.hasOwnProperty('name'));   // return in boolean

const course = {
    courseName: "JS",
    type: "Online",
    time: "15 Days"
}


// object destructuring

const {courseName} = course

const {time: duration} = course         // destructuring by creating another name

console.log(courseName);
console.log(duration);


// {
//     "name":"subhadip",
//     "class":"MSc in Computer Science",
//     "Student": false
// }

