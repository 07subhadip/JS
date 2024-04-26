let score = undefined

console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);     // NaN (Not a Number)

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "subha" => true
// "" => false

let isNumber = 44

let stringInNumber = String(isNumber)

console.log(typeof stringInNumber);
console.log(stringInNumber);


// *************************** OPERATIONS ***************************

console.log(1 + 2 + "2");   // 32
console.log("1" + 2 + 2);   // 122

console.log(true);
console.log(+true);

console.log("");
console.log(+"");   // in boolean empty string is a false value

let gameCount = 100
console.log(++gameCount);
console.log(gameCount++);