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
            Parent.hasMany(models.Report, {foreignKey: 'parentId', sourceKey: 'id' });
            Parent.hasMany(models.Student, { foreignKey: 'studentId', sourceKey: 'id' });
            Parent.belongsTo(models.School, { foreignKey: 'schoolId', sourceKey: 'id' });
            Parent.belongsTo(models.Company, { foreignKey: 'companyId', sourceKey: 'id' });
        }

        static async findByEmail(email) {
            return await this.findOne({ where: { email } });
        }
    }
    Parent.init({
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Companies',
                key: 'id'
            }
        },
        schoolId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Schools',
                key: 'id'
            }
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
                len: [0, 50]
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
                len: [5, 256]
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [14,14],
            }
        },
        studentRelation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 15]
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
        modelName: 'Parent',
        defaultScope: {
            attributes: {
                exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
            }
        }
    });
    return Parent;
};
