const {product} =  require("../models")

function add(productData) 
{
    return product.create(productData);
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
