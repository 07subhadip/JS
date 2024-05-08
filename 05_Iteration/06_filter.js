const myArray = ["thor","spiderman","superman"]

let newVariable = myArray.forEach((items)=>{
    return items
})

console.log(newVariable);

const myNum = [1,2,3,4,5,6,7,8,9]

const store = myNum.filter( (items)=>{
    return items>5
})

console.log(store);

const anotherStore = myNum.filter( (n)=> n>5 )

console.log(anotherStore);

let outputArray = []

myNum.forEach( (num)=>{
    if(true){
        outputArray.push(num)
    }
})

console.log(outputArray);


console.log(`******************************************************`);

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publication: "J. B. Lippincott & Co.",
        genre: "Fiction",
        dateOfPublish: "July 11, 1960"
    },
    {
        title: "1984",
        author: "George Orwell",
        publication: "Secker & Warburg",
        genre: "Dystopian Fiction",
        dateOfPublish: "June 8, 1949"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publication: "Charles Scribner's Sons",
        genre: "Fiction",
        dateOfPublish: "April 10, 1925"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publication: "T. Egerton, Whitehall",
        genre: "Romance",
        dateOfPublish: "January 28, 1813"
    },
    {
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        publication: "Little, Brown and Company",
        genre: "Coming-of-age Fiction",
        dateOfPublish: "July 16, 1951"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        publication: "Bloomsbury Publishing",
        genre: "Fantasy",
        dateOfPublish: "June 26, 1997"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        publication: "Allen & Unwin",
        genre: "High Fantasy",
        dateOfPublish: "July 29, 1954"
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        publication: "Richard Bentley",
        genre: "Adventure Fiction",
        dateOfPublish: "October 18, 1851"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publication: "Allen & Unwin",
        genre: "Fantasy",
        dateOfPublish: "September 21, 1937"
    },
    {
        title: "To the Lighthouse",
        author: "Virginia Woolf",
        publication: "The Hogarth Press",
        genre: "Modernist Fiction",
        dateOfPublish: "May 5, 1927"
    }
];

let selectedBooks = books.filter( (book) => {
    return book.genre==="Fantasy"
})

console.log(selectedBooks);