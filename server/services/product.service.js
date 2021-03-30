const { product } = require("../models")

function add(productData) {
    return product.create(productData);
}

function deleteById(id) {
    return product.destroy({ where: { id } })
}

function updateById(id, data) {
    return product.update(data, { where: {id}});
}

function getAll() {
    return product.findAll({})
}

function getById(id) {
    return product.findByPk(id)
}

module.exports = { add, deleteById, updateById, getAll, getById }
