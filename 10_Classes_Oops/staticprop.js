class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

    static createId(){
        return `123`
    }
}


const subha = new User("subhadip")

// console.log(subha.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe();
// iphone.createId()    this will not work due to static createId