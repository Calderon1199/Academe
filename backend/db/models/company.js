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

        static async findByEmail(email) {
            return await this.findOne({ where: { email } });
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
                len: [13, 13],
                isPhoneNumber(number) {
                    if (!/^[0-9()-]+$/.test(number)) {
                        throw new Error('Phone number format: (***)***-****');
                    }
                }
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [5, 100],
                isAddress(value) {
                    if (!/^[a-zA-Z0-9\s]*$/.test(value)) {
                        throw new Error('Address format is incorrect');
                    }
                }
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 2],
                isAlpha: true
            }
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 10],
                isNumeric: true
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
