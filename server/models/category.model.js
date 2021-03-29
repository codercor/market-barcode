const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
class User extends Model { };

User.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Category",
    charset: "utf8",
})

User.sync({ force: true });

module.exports = User;