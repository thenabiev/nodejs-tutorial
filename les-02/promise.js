// #### EXAMPLE 1

const promise1=new Promise((res, rej)=>{
      res("Resolved")

    // rej("NO INTERNET CONNECTION")
})
// console.log(promise1);
promise1.then(value=> value="RESPONSE")
.then(data=>console.log(data + " Succ"))
.catch(err=>console.log(err))

// #### EXAMPLE 2

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


const addBook=(newBook)=>{

    const promise2=new Promise((res, rej)=>{
    books.push(newBook);
        res(books)
        rej("An error occured")
    })

    return promise2
}

// listBooks();

 addBook({name: "Book 5", author: 'Auth 5'}, listBooks)
 .then(res=>console.log(res))
 .catch(err=>console.log(err))