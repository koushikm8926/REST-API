const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true, "Price must be provided"],
    },
    featured:{
        type:Number,
        default:false,
    },
    rating:{
        type:Number,
        default:4.8,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","google", "microsoft", "dell", ],
            message:`{VALUE} does not support `,
        },
    },
});

module.exports= mongoose.model("Product", productSchema);