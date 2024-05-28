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
            Report.belongsTo(models.Parent, { foreignKey: 'parentId', sourceKey: 'id' });
            Report.belongsTo(models.Student, { foreignKey: 'studentId', sourceKey: 'id' });
            Report.belongsTo(models.Admin, { foreignKey: 'adminId', sourceKey: 'id' });
            Report.belongsTo(models.Company, { foreignKey: "companyId", sourceKey: 'id' });
        }
    }
    Report.init({
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Students',
                key: 'id'
            }
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Parents',
                key: 'id'
            }
        },
        adminId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Admins',
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
    });
    return Report;
};
