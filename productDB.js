require ("dotenv").config();
const connectDB = require("./database/connect");
const Product  = require("./models/products");
const ProductJSON = require ("./products.json");

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJSON);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start()