const express = require("express")
const UserRouter = require("./routers/user")
const ItemRouter = require("./routers/item")
const CartRouter = require("./routers/cart")
require("./db/mongoose")

const app = express()
app.use(express.json())
app.use(UserRouter);
app.use(ItemRouter);
app.use(CartRouter);

const port=3000;









app.listen(port, () => {
    console.log('server listening on port ' + port)
})