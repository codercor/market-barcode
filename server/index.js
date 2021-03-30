const express = require("express")
const app = express();
require("dotenv").config()


app.use(express.json());

const { product: productRouter , user:userRouter } = require("./routes")

app.use("/product", productRouter)
app.use("/user", userRouter)

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running " + `http://localhost:${process.env.SERVER_PORT}`);
})