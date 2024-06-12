const user = {
    username: "subhadip",
    loginCount: 10,
    signedIn: false,

    getUserDetails: function(){
        console.log("Got User Details from DB");
        console.log(`Username: ${this.username}`);
    }
}

console.table(user);

console.log(user.getUserDetails());


function User(username , isLoggedIn , SignedIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.SignedIn = SignedIn;

    return this;
}

const userOne = new User("Subhadip Hensh",23,true)
const userTwo = new User("Anusuya Ghosal",23,true)

console.table(userOne);
console.table(userTwo);
