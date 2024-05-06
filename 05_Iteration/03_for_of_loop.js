// for of

// ["","",""]
// [{},{},{}]

const myArray = ["subha","anu","mithu","dipak"]

for (const elemetns of myArray) {
    console.log(elemetns);
}

const userEmail = `subhadip hensh 31 10 2000 @ gmail . com`

for (const user of userEmail) {
    if (user === " ") {
        continue
    }
    console.log(user);
}

const map = new Map()
map.set('IN','INDIA')
map.set('AUS','Australia')
map.set('NZ','New Zeland')

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,":-",value);
}

// forof loop is not iteratable for the objects
