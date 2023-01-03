const express= require("express")

const app=express();
const PORT=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello world")
})


const start=async()=>{
    try {
       
        await app.listen(PORT,()=>{
            console.log("Server started at port 3000");
        })

    } catch (error) {
        console.log(error);
    }
}

start()