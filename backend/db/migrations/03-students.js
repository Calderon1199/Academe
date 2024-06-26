'use strict';

let options = {};
options.tableName = 'Students';
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(options, {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            parentId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        tableName: 'Parents',
                        schema: options.schema
                    },
                    key: 'id'
                },
            },
            companyId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'Companies',
                        schema: options.schema
                    },
                    key: 'id'
                },
            },
            schoolId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'Schools',
                        schema: options.schema
                    },
                    key: 'id'
                },
            },
            firstName: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            grade: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            strikes: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, options);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable(options);
    }
};
