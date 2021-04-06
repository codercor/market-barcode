const { productService } = require("../services");

async function add(req, res) {
    const { productData } = req.body;
    productData.companyId = req.companyId;
    const status = await productService.add(productData);

    res.json({ status });

}

async function getByBarcode(req, res) {
    const { barcode } = req.params;
    let product = await productService.getByBarcode(barcode, req.companyId);
    if (product) {
        res.json({ product });
    } else {
        res.json({ error: "product does not exist" })
    }
}

async function deleteById(req, res) {
    const { id } = req.params;
    let status = await productService.deleteById(id);
    status = status == 1 ? true : false
    res.json({ status })
}


async function updateById(req, res) {
    const { id } = req.params;
    const { productData } = req.body;

    let product = await productService.updateById(id, productData);
    res.json({ product })
}

async function getAll(req, res) {
    let products = await productService.getAll(req.companyId);
    res.json({ products })
}

async function getById(req, res) {
    const { id } = req.params;
    let product = await productService.getById(id, req.companyId);
    res.json({ product })
}

module.exports = { add, deleteById, updateById, getAll, getById, getByBarcode }
