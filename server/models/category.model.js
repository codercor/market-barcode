const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
class Category extends Model { };

Category.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Category",
    charset: "utf8",
})

//Category.sync({ force: true });

module.exports = Category;