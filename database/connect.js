const mongoose =  require ("mongoose");

uri = "mongodb+srv://koushik:pzVLQwZ4ocEMGybz@productapi.akjdirw.mongodb.net/ProductAPI?retryWrites=true&w=majority&appName=ProductAPI"

const  connectDB = ()=>{
    console.log("database connected");
    return mongoose.connect(uri);
};

module.exports = connectDB;