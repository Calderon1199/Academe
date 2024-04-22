'use strict';

let options = {};
options.tableName = 'Reports';
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
            studentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'Students',
                        schema: options.schema
                    },
                    key: 'id'
                },
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
                        tableName: 'Companys',
                        schema: options.schema
                    },
                    key: 'id'
                },
            },
            adminId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'Admins',
                        schema: options.schema
                    },
                    key: 'id'
                },
            },
            hwCompletion: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            notes: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            behaviorScore: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, options);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable(options);
    }
};
