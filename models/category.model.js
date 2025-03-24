const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
     
  },
  
  
}, {underscored: true, timestamps: true}); 

module.exports = Category;
