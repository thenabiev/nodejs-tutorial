const fs = require('node:fs');

// File reading

async function read(){

    await write()
    setTimeout(()=>{
        fs.readFile("message.txt", 'utf-8', (err, data)=>{
            if(err){
                console.log("Data is not exist");
                throw err
            }
            console.log("Data has been read")

            setTimeout(()=>{
            console.log(data);

            },2000)
        });
    },1800)
}

// Writing a file


function write(){
    setTimeout(()=>{
        fs.writeFile('message.json', '{"name":"Sahin", "age":23}', 'utf-8', (err)=>{
            if(err){
                throw err
            }
        
                console.log("File has been created successfuly");
        
        });
    }, 1000)
}
setTimeout(()=>{
    read();
},3000)

// Add data on file


fs.appendFile('message.txt', '\n New paragraph', 'utf-8', (err)=>{
    if(err){
        throw err
    }

    setTimeout(()=>{
        console.log("Adding process is successful");
    }, 1000);
    read();
});

// Delete data 
// fs.unlink('example.json', (err)=>{
//     if(err){
//         throw err
//     }
//     console.log("Data has been deleted");
// });


// Create folder

fs.mkdir("Example/test/final", {recursive:true}, (err)=>{
    if(err){
        throw err
    }
    setTimeout(()=>{
        console.log("Folder is created now");
    }, 1000);

})

// fs.rmdir('modules', {recursive:true}, err=>{
//     console.log(err);
// })