const express = require("express")
const app = express();
require("dotenv").config()

const { category, product, user } = require("./models");
const { product: productRouter } = require("./routes")

app.use("/product", productRouter)

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running " + `http://localhost:${process.env.SERVER_PORT}`);
})