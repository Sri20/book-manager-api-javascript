const Sequelize = require('sequelize');

// TODO: This should be external config
let sequelize = new Sequelize('sqlite::memory:');

if (process.env.NODE_ENV !== 'dev') { 
    sequelize = new Sequelize(process.env.DB_NAME, process.env. DB_USERNAME, process.env.DB_PASSWORD, { 
    host: process.env.DB_HOST, 
    dialect: process.env.DB_DIALECT, 
    }); 
}
module.exports = sequelize;
