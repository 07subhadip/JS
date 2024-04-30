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