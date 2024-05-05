// IIFE --> Immediately Invoke Function Expression

// Function Definition Function Execution
//       ()                   ()


// named IIFE
(function connection(){
    console.log(`DB CONNECTED`);
})();


// unnamed IIFE
((username)=> {
    console.log(`DB CONNECTED for ${username}`);
})('Subhadip');
// this is how we can pass parameters in an IIFE 


