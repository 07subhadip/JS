const myNum = [1,2,3,4]

let outputArray = myNum.reduce(function (acc , currval){
    console.log(`acc : ${acc}  currval : ${currval}`);
    return acc + currval
}, 5)

console.log(outputArray);

let anotherArray = myNum.reduce((acc , curr)=>acc+curr , 0)
console.log(anotherArray);


const courses = [
    {
        course: "Web Development Bootcamp",
        price: 299,
        duration: "12 weeks"
    },
    {
        course: "Data Science Fundamentals",
        price: 399,
        duration: "10 weeks"
    },
    {
        course: "Mobile App Development",
        price: 349,
        duration: "8 weeks"
    },
    {
        course: "Graphic Design Masterclass",
        price: 249,
        duration: "6 weeks"
    },
    {
        course: "Digital Marketing Crash Course",
        price: 199,
        duration: "4 weeks"
    },
    {
        course: "Photography Basics",
        price: 149,
        duration: "6 weeks"
    },
    {
        course: "Blockchain Essentials",
        price: 299,
        duration: "8 weeks"
    },
    {
        course: "Python Programming",
        price: 199,
        duration: "10 weeks"
    },
    {
        course: "Machine Learning Fundamentals",
        price: 399,
        duration: "12 weeks"
    },
    {
        course: "UI/UX Design Fundamentals",
        price: 299,
        duration: "8 weeks"
    }
];

console.log(`Cart Price : ${courses.reduce((acc , itemsAmount)=> acc+ itemsAmount.price , 0)}`);

