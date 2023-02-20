// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// const func1=()=>{
//     console.log("Function 1");
// }
// const func2=async ()=>{
//     await func3()
//     console.log("Function 2");
// }
// const func3= ()=>{
//      console.log("Function 3");
// }



// func1()
// func2()
// func3()


// let x=5

// console.log(x);

// setTimeout(()=>{
//     x=x+7;
//     console.log(x);
// }, 2000)

// x=x+5;

// console.log(x);

const books=[
    {name: "Book 1", author: 'Auth 1'},
    {name: "Book 2", author: 'Auth 2'},
    {name: "Book 3", author: 'Auth 3'},
    {name: "Book 4", author: 'Auth 4'},

]

function listBooks(){
    books.map(book=>{
        console.log(book.name, book.author);
    })
}


const addBook=(newBook, callback)=>{
    books.push(newBook);
    callback()
}

// listBooks();

 addBook({name: "Book 5", author: 'Auth 5'}, listBooks)