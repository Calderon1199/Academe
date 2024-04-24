'use strict';
const {
    Model,
    Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Company extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Company.hasMany(models.School, { foreignKey: 'companyId', sourceKey: 'id' });
            Company.hasMany(models.Admin, { foreignKey: 'companyId', sourceKey: 'id' });
        }
    }
    Company.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        hashedPassword: {
            type: DataTypes.STRING.BINARY,
            allowNull: false,
            validate: {
                len: [60, 60]
            }
        },
    }, {
        sequelize,
        modelName: 'Company',
        defaultScope: {
            attributes: {
                exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
            }
        }
    });
    return Company;
};
