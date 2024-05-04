// if-else statement

const temperature = 45

if(temperature > 40){
    console.log(`Temparature is ${temperature} degree`);
}else{
    console.log(`Temparature is less than 40 degree`);
}

if(true){
    var score = 200         
    console.log(`score is ${score}`);
}
console.log(`score is ${score}`);       // it will print because the scope of var is global

const userLoggedIn = true
const userValid = true

if (userLoggedIn && userValid) {
    console.log(`User Can Buy Courses`);
}

if (userLoggedIn || userValid) {
    console.log(`User Can Buy Books`);
}