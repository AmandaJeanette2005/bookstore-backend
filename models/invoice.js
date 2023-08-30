'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  invoice.init({
    user_id: DataTypes.INTEGER,
    invoice_no: DataTypes.STRING,
    total_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'invoice',
    tableName: 'invoices',
    timestamps: true
  });
  return invoice;
};