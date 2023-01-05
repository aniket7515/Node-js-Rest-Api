const mongoose = require("mongoose")

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        reuired:true,
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
    comapany:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi","oneplus"],
            message:`{VALUE} is not supported`
        },
    },

})


module.exports= mongoose.model("Product",productSchema);