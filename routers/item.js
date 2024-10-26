const express=require("express");
const ItemRouter=express.Router();

ItemRouter.get("/products",(req,res)=>{
    res.send("This is the Product Item page");    
})


module.exports=ItemRouter;