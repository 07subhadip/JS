function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this,username)

    this.email=email
    this.password=password
}

const subha = new createUser("subhadip","subhadip@gmail.com","12345")
console.log(subha);