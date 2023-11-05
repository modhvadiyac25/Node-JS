const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.use(express.static("./public")); //here public would be the folder name which may contains the neccesory file to load the fully html page ex. css file, png file etc

app.get('/',(req,res)=>{
    console.log("Home");
    res.sendFile(path.resolve(__dirname,"./index.html"));
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