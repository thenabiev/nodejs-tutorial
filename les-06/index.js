const express=require('express');
const app=express();

const port=3002;

app.get('/', (req, res)=>{
    res.status(200)
        .send('<h1 style="color:blue;text-align:center;font-family:sans-serif;">HOME PAGE</h1>')
});

app.get('/about', (req, res)=>{
    res.status(200)
        .send('<h1 style="color:blue;text-align:center;font-family:sans-serif;">ABOUT PAGE</h1>')
});

app.get('/contact', (req, res)=>{
    res.status(200)
        .send('<h1 style="color:blue;text-align:center;font-family:sans-serif;">CONTACT PAGE</h1>')
});

app.get('*', (req, res)=>{
    res.status(404)
        .send('<h1 style="color:blue;text-align:center;font-family:sans-serif;">ERROR 404 : Page not found</h1>')
});

app.listen(port)