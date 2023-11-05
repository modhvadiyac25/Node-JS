const express = require('express');
const app = express();
const data = require('./data');
const port = 5000;


app.get('/',(req,res)=>{
    console.log("Home");
    res.send("<h1>Home page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products",(req,res)=>{
    const newProduct = data.products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image};
    });
    res.json(newProduct);
    // res.json(data.products);
});

app.get("/api/products/:productId",(req,res)=>{
    console.log(req);
    const {productId} = req.params;
    const singleProduct = data.products.find((product)=> product.id === Number(productId));
    if(!singleProduct){
        return res.status(404).send("<h1>Product Not Found</h1>");
    }
    res.json(singleProduct);
    // res.json(data.products);
});

app.get("/api/v1/query",(req,res)=>{
    const {search,limit} = req.query;
    let sortedProducts = [...data.products];
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        });
    } 
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    res.status(200).json(sortedProducts);
});


app.all('*',(req,res)=>{
    res.status(404).send("<h1>Resource not found</h1>")    ;
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