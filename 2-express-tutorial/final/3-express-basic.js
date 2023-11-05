const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.status(200).send("Home page");
    console.log("user hit the resource");
});

app.get('/about',(req,res)=>{
    console.log("about page");
    res.status(200).send("About page");
});

app.all('*',(req,res)=>{
    res.status(404).send("<h1>Resource not found</h1>")    
});

app.listen(port,()=>{
    console.log(`Server is listenning on port : 5000`);
});


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen