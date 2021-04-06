const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
class Product extends Model { };

Product.init({
    companyId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },

    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    cost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    barcode: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
    ,
    unit: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
    ,
    amount: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "Product",
    charset: "utf8",
})

//Product.sync({ force: true });

module.exports = Product;