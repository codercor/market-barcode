const {productService} = require("../services");

async function add(req,res) 
{
    const {productData} = req.body;
    const status= await productService.add(productData);

    res.json({status});

}

function deleteById(req,res) 
{

}

function updateById(req,res) 
{

}

function getAll(req,res) 
{

}

function getById(req,res) 
{

}

module.exports = {add,deleteById,updateById,getAll,getById}
