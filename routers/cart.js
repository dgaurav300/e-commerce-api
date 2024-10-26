const express=require("express");
const CartRouter=express.Router();

CartRouter.get("/carts",(req,res)=>{
    res.send("This is the cart page");    
})


module.exports=CartRouter;