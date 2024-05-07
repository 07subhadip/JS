const myArray = ["js",'ruby','py','cpp','java']

myArray.forEach(function (item){
    console.log(item);
}) 

myArray.forEach((items)=>{
    console.log(items);
})

function printme(element){
    console.log(element);
}

myArray.forEach(printme)

myArray.forEach((items,index,arr)=>{
    console.log(items,index,arr);
})

const languages = [
    {
        progLang : "C++",
        extension: ".cpp"
    },
    {
        progLang: "JavaScript",
        extension: ".js"
    },
    {
        progLang: "python",
        extension: ".py"
    }
]

languages.forEach((key)=>{
    console.log(key);
})
languages.forEach((key)=>{
    console.log(`${key.progLang} : ${key.extension}`);
})