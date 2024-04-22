'use strict';
const {
    Model,
    Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Report extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Report.init({
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hwCompletion: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        behaviorScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 3
            }
        },
    }, {
        sequelize,
        modelName: 'Report',
        defaultScope: {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        }
    });
    return Report;
};
