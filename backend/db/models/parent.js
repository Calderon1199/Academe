'use strict';
const {
    Model,
    Validator
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class Parent extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Parent.init({
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        schoolId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        avatarUrl: {
            type: DataTypes.STRING(256),
            allowNull: false,
            defaultValue: "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png"
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
        strikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        authorized: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
        avatarImg: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png',
            validate: {
                len: [5, 256]
            }
        }
    }, {
        sequelize,
        modelName: 'Parent',
        defaultScope: {
            attributes: {
                exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
            }
        }
    });
    return Parent;
};