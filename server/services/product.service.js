const { product } = require("../models")

function add(productData) {
    return product.create(productData);
}

function deleteById(id) {
    return product.destroy({ where: { id } })
}

function getByBarcode(barcode, companyId) {
    return product.findOne({ where: { barcode, companyId } })
}

function updateById(id, data) {
    return product.update(data, { where: { id } });
}

function getAll(companyId) {
    return product.findAll({ where: { companyId } })
}

function getById(id, companyId) {
    return product.findOne({ where: { id, companyId } })
}

module.exports = { add, deleteById, updateById, getAll, getById, getByBarcode }
