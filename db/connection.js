const mongoose=require("mongoose")
const URL="mongodb://localhost:27017/expressapi"

const connectDB=async()=>{

        mongoose.connect(URL).then(()=>{
            console.log("Database connected suucesfully");
        })
}

module.exports= connectDB;