const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Service = require('./service.model');

const PrinceOption = sequelize.define('PrinceOption', {
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('Hourly', 'Daily', 'Monthly'),
        allowNull: false,
    },
});
Service.hasMany(PrinceOption, { onDelete: "CASCADE" });
PrinceOption.belongsTo(Service);


module.exports = PrinceOption;