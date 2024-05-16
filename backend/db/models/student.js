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
            Student.hasMany(models.Report, { foreignKey: 'studentId', sourceKey: 'id' });
            Student.belongsTo(models.Parent, { foreignKey: 'studentId', sourceKey: 'id' });
            Student.belongsTo(models.Company, { foreignKey: 'companyId', sourceKey: 'id' });
            Student.belongsTo(models.School, { foreignKey: 'schoolId', sourceKey: 'id' });
        }
    }
    Student.init({
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Parents',
                key: 'id'
            }
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Companies',
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
