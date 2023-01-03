const getAllProducts= async(req,res)=>{
    res.status(200).json({message:"I am getiinfg all products"})
}

const getAllProductsTesting= async(req,res)=>{
    res.status(200).json({message:"I am getiinfg all products testing"})
}



module.exports= {getAllProducts,getAllProductsTesting}
