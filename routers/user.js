const express=require("express");
const UserRouter=express.Router();

UserRouter.get("/users",(req,res)=>{
    res.send("Get all users");
});

UserRouter.post("/login",(req,res)=>{
    res.send("login request");
})


module.exports=UserRouter;