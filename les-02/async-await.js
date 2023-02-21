
function getData(data) {
    return new Promise((resolve, reject) => { // promise dönüyoruz.
      console.log("Datalar alınır...");
  
      setTimeout(()=>{  // {} içərisində verilmiş funksiyanı 1.2 saniyə gecikdirmək üçün
        if (data) {
            resolve("Datalar alındı..."); 
          } else {
            reject("Bir problem oldu (Get Data)...");
          }
      },1200)
    });
  };


  function cleanData(receivedData) { // promise dönüyoruz.
    return new Promise((resolve, reject) => {
      console.log("Datalar düzənlənir..");
  
      setTimeout(()=>{
        if (receivedData) {
            resolve("Datalar düzənləndi"); 
          } else {
            reject("Bir problem oldu (Clean Data)");
          }
      }, 1200)
    });
  }
  
// PROMISE


//   getData(1)
//   .then(res=>{
//     console.log(res)
//     return cleanData(0)
//   })
//   .then(
//     res=>console.log(res)
//   ).catch(err=>console.log(err))



  // ASYNC AWAIT

// async function process(){

//     try {

//         const receivedData=await getData(1);

//         console.log(receivedData, "Datalar alındı (Async) ");
    
//         const cleanedData=await cleanData(0);
    
//         console.log(cleanedData);

//     }
//     catch(err) {
//         console.log(err);
//     }

// }

// process();




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

//  addBook({name: "Book 5", author: 'Auth 5'}, listBooks)
//  .then(res=>console.log(res))
//  .catch(err=>console.log(err));

async function showBooks(){
    try{
        await addBook({name: "Book 9", author: 'Auth 9'});

        listBooks() 
    }
    catch(err){
        console.log(err);
    }
}
showBooks()