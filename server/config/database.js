const { Sequelize } = require("sequelize")

const { log } = require("../utils/logger");

require("dotenv").config();
const { DB_HOST,
    DB_USERNAME,
    DB_NAME,
    DB_PASSWORD,
    DB_TYPE } = process.env;


const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_TYPE,
    logging: msg => log(msg)
});

module.exports = sequelize;