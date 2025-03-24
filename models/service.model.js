const {dataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./category.model');

const Service = sequelize.define('Service', {
    name: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    });
    Category.hasMany(Service,{onDelete : "CASCADE"});
    Service.belongsTo(Category);

module.exports = Service;