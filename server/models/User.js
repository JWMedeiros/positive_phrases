const { Model, DataTypes } = require('sequelize');
const bcrypt = require ('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
    userId: {
        field: 'user_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      field: 'user_name',
      allowNull: false,
    },
    password: {
        field: 'user_password',
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        field: 'user_email',
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    hooks: {
     beforeCreate: async (user) => {
      if (user.password) {
       const salt = await bcrypt.genSaltSync(10, 'a');
       user.password = bcrypt.hashSync(user.password, salt);
      }
     },
     beforeUpdate:async (user) => {
      if (user.password) {
       const salt = await bcrypt.genSaltSync(10, 'a');
       user.password = bcrypt.hashSync(user.password, salt);
      }
     }
    },
    instanceMethods: {
     validPassword: (password) => {
      return bcrypt.compareSync(password, this.password);
     }
    }
   },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);


module.exports = User;
