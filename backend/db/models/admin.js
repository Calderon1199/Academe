'use strict';
const {
  Model,
  Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Admin.belongsTo(models.Company, { foreignKey: 'companyId', sourceKey: 'id'});
      Admin.belongsTo(models.School, { foreignKey: 'schoolId', sourceKey: 'id' });
      Admin.hasMany(models.Report, { foreignKey: 'adminId', sourceKey: 'id' });
    }
  }
  Admin.init({
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Companys',
        key: 'id'
      }
    },
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Schools',
        key: 'id'
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 30]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 30]
      }
    },
    authorized: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 50]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [3, 256]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    avatarUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png',
      validate: {
        len: [5, 256]
      }
    }
  }, {
    sequelize,
    modelName: 'Admin',
    defaultScope: {
      attributes: {
        exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
      }
    }
  });
  return Admin;
};
