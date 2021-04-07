const express = require("express")
const app = express();
require("dotenv").config()


app.use(express.json());
app.use(require("cors")())

const { ValidationError } = require("express-validation")



const { product: productRouter, user: userRouter } = require("./routes")

app.use("/product", productRouter)
app.use("/user", userRouter)

app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        res.json({ error: "validation failed" });
    }
})

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running " + `http://localhost:${process.env.SERVER_PORT}`);
})