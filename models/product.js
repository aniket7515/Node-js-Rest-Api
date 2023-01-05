const mongoose = require("mongoose")

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        reqired:true,
    },
    price:{
        type:Number,
        required:[true , "price must be provided"],
    },
    featured:{
        type:Boolean,
    },
    rating: {
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi","oneplus","hp"],
            message:`{VALUE} is not supported`
        },
    },

})


module.exports= mongoose.model("Product",productSchema);