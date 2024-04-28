const marvel_heros = ["thor","spiderman","iron-man"]
const dc_heros = ["superman","batman","flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);      // it will perfrom array in an array

const numArr = [1,2,3,4]
const numArr2 = [5,6,7,8]

const mixedArray = numArr.concat(numArr2)

console.log(mixedArray);

// spread operator
// it will spread all elements individual like what happens after dropping a glass of water

const all_heros = [...numArr,...numArr2]
console.log(all_heros);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11,[12,13]]]]
const real_another_array = another_array.flat(Infinity)         // it will concatenate all sub arrays in an single array 
// here we have passed Infinity which is nothing but the depth you can use any integer number also

console.log(real_another_array);

console.log(Array.isArray("subhadip")); // false
console.log(Array.from("subhadip"));
console.log(Array.from({name: "subhadip"}));    // interesting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));