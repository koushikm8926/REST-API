const express = require("express");
const app = express();
const products_routes = require("./routes/products")
const connectDB = require("./database/connect")
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response)=>{
    response.send("hello i am working properly")
});


app.use("/api/products",products_routes);

const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT}, connected `);
        })

    } 
    catch (error) {
        console.log(error)
    }
}


start();