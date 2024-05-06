const myObject = {
    name: "subhadip",
    class : "MSc",
    subject: "Compter Science"
}

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}

const myArr = [1,2,3,4,5]

for (const key in myArr) {
    console.log(myArr[key]);
}


// this is not iteratable

// const map = new Map()
// map.set('IN','INDIA')
// map.set('AUS','Australia')
// map.set('NZ','New Zeland')

// console.log(map);

// for (const key in map) {
//     console.log(key);
// }