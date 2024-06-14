class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}subha`
    }

    set password(value){
        this._password = value
    }
}

const subha = new User("subhad@gmail.com","123abc")

console.log(subha.password);
console.log(subha.email);