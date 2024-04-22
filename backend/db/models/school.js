'use strict';
const {
    Model,
    Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class School extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    School.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 10]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 100]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 2]
            }
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 10]
            }
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg"
        }
    }, {
        sequelize,
        modelName: 'School',
        defaultScope: {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        }
    });
    return School;
};
