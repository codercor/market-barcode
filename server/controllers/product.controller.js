const { productService } = require("../services");

async function add(req, res) {
    const { productData } = req.body;
    const status = await productService.add(productData);

    res.json({ status });

}

async function deleteById(req, res) {
    const { id } = req.params;
    let status = await productService.deleteById(id);
    status = status == 1 ? true : false
    res.json({ status })
}

function updateById(req, res) {

}

async function getAll(req, res) {
    let products = await productService.getAll();
    res.json({ products })
}

async function getById(req, res) {
    const { id } = req.params;
    let product = await productService.getById(id);
    res.json({ product })
}

module.exports = { add, deleteById, updateById, getAll, getById }
