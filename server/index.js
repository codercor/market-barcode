const express = require("express")
const app = express();
require("dotenv").config()


const { category, product, user } = require("./models");
app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running " + `http://localhost:${process.env.SERVER_PORT}`);
})