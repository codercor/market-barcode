const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
class User extends Model { };

User.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    companyName: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    adress: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

}, {
    sequelize,
    modelName: "User",
    charset: "utf8",
})

//User.sync({ force: true });

module.exports = User;