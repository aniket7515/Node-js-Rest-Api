const product = require('../models/product');
const Model=require('../models/product')

const getAllProducts= async(req,res)=>{
    // res.status(200).json({message:"I am getiinfg all products"})
    // let data;
    // try {
    //     data=await Model.find(req.query);
    // } catch (error) {
    //     console.log(error);
    // }
    // if(!data) res.status(404).json({message:"No Products found"})
    // return res.status(200).json({data})
    const {company,name} = req.query;
    const queryObject={};
    if(company){
        queryObject.company=company;
        console.log(queryObject.company);
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};
        // console.log(queryObject.name);
    }
    const myData=await product.find(queryObject)
    res.status(200).json({myData})
}

const getAllProductsTesting= async(req,res)=>{
    let data;
    try {
        data=await Model.find(req.query);
    } catch (error) {
        console.log(error);
    }
    if(!data) res.status(404).json({message:"No Products found"})
    return res.status(200).json({data})
}

const putAllProducts= async(req,res)=>{

    const {name,price,featured,rating,createdAt,company}=req.body;
    // let product;
    let data;
    try {
        data= new Model({
            name,
            price,
            featured,
            rating,
            createdAt,
            company
    
        })
        await data.save();
        // res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    if(!data) return res.status(500).json({message:"Unable to add"})
    return res.status(201).json({data})
}


module.exports= {getAllProducts,getAllProductsTesting,putAllProducts}
