const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
class User extends Model { };

User.init({
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false
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

//User.sync({ force: true });

module.exports = User;