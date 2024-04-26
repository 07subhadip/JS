const accountId = 144232
let accountEmail = "subhadip@gmail.com"
var accountPassword = "434232"
accountName = "subhadip"
let accountState; 

// accountId = 1313 // not allowed

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "anusuya@gmail.com"
accountPassword = "232323"
accountName = "anusuya"

console.table([accountId,accountEmail,accountPassword,accountName,accountState])