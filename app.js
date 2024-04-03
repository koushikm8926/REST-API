const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;


app.get("/", (request, response)=>{
    response.send("hello i am working properly")
})

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