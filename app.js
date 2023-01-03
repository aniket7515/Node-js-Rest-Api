const express= require("express")

const app=express();
const PORT=process.env.PORT || 3000;
const products_routes= require("./routes/products")



// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })

app.use("/api/products",products_routes);

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