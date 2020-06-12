'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: DataTypes.INTEGER
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};