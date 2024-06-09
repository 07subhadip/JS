const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography,network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consume");
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 2000);
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username : "subhadip hensh",age : 12,email : "subhadiphensh31102000@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username : "subhadip",password:123})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error); 
})