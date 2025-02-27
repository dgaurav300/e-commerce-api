const express=require("express");
const User = require("../model/user");
const auth = require("../middleware/auth");

const UserRouter=express.Router();

//signup
UserRouter.post('/users', async (req, res) => {
    const user = new User(req.body)
    console.log(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (error) {
        res.status(400).send(error)
    }
    })
    UserRouter.post('/users/login', async (req, res) => {
        try {
          const user = await User.findByCredentials(req.body.email,req.body.password)
          const token = await user.generateAuthToken()
          res.send({ user, token})
        } catch (error) {
          res.status(400).send(error)
         }
        });
        UserRouter.post('/users/logout', auth, async (req, res) => {
            try {
                req.user.tokens =  req.user.tokens.filter((token) => {
               return token.token !== req.token
              })
                await req.user.save()
                res.send()
            } catch (error) {
                res.status(500).send()
            }
            });
            
            UserRouter.post('/users/logoutAll', auth, async(req, res) => {
                try {
                   req.user.tokens = []
                   await req.user.save()
                   res.send()
                } catch (error) {  
                   res.status(500).send()
                }
                })



module.exports=UserRouter;