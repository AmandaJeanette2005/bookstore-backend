'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  books.init({
    category_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    author: DataTypes.STRING,
    thn_terbit: DataTypes.INTEGER,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'books',
    tableName: 'books',
    timestamps: true
  });
  return books;
};