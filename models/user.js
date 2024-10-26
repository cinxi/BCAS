// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class user extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   user.init({
//     fullname: DataTypes.STRING,
//     Role: DataTypes.STRING,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     ContactNumber: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'user',
//   });
//   return user;
// };


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // Define associations if needed
    }
  }
  user.init({
    fullname: DataTypes.STRING,
    Role: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    ContactNumber: DataTypes.STRING // Use STRING for phone numbers to handle leading zeros
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
