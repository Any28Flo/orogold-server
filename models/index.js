const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new  Sequelize(dbConfig.DB , dbConfig.USER, {
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorsAliases : false,
    pool:{
        max : dbConfig.pool.max,
        min : dbConfig.pool.min,
        acquire : dbConfig.acquire,
        idle : dbConfig.pool.idle
    }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.appointment = require("./appointment-model.js")(sequelize, Sequelize);

module.exports = db;
