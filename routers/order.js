const express=require("express")
const auth = require("../middleware/auth");
const OrderRouter=express.Router();

OrderRouter.get('/orders', auth, async (req, res) => {
    const owner = req.user._id;
    try {
    const order = await Order.find({ owner: owner }).sort({ date: -1 });
    res.status(200).send(order)
    } catch (error) {
    res.status(500).send()
    }
    })

module.exports=OrderRouter;    