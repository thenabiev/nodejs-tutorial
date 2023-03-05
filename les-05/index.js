const http=require('http');

const server=http.createServer((req, res)=>{
    const url=req.url;
    if(url==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1 style={color:red}>HOME</h1>')
    }
    else if(url==='/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1 style={color:"red"}>ABOUT</h1>')
    }
    else if(url==='/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1 style={color:"red"}>CONTACT</h1>')

    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1 style={color:"red"}>Error 404: Page Not Found</h1>')

    }


    console.log('Bir request göndərildi');
    res.write(`Server ${port} nömrəli port altında başladıldı`)
    res.end()
})

let port =3008
server.listen(port, ()=>{
    console.log(`Server ${port} nömrəli port altında başladıldı`);
    
})