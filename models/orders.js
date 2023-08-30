  'use strict';
  const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class orders extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    orders.init({
      user_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      invoice_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      product_price: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'orders',
      tableName: 'orders',
      timestamps: true
    });
    return orders;
  };