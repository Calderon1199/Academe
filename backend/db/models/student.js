'use strict';
const {
    Model,
    Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Student extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Student.init({
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        schoolId: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 6
            }
        },
        strikes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        modelName: 'Student',
        defaultScope: {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        }
    });
    return Student;
};
