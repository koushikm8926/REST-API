const express = require("express");
const app = express();
const products_routes = require("./routes/products")

const PORT = process.env.PORT || 3000;

app.get("/", (request, response)=>{
    response.send("hello i am working properly")
});


app.use("/api/products",products_routes);

const start = async()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`${PORT}, connected `);
        })

    } 
    catch (error) {
        console.log(error)
    }
}


start();