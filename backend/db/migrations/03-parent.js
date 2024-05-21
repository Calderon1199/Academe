'use strict';

let options = {};
options.tableName = 'Parents';
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
            companyId: {
                type: Sequelize.INTEGER,
                allowNull: true,
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
                allowNull: true,
                references: {
                    model: {
                        tableName: 'Schools',
                        schema: options.schema
                    },
                    key: 'id'
                },
            },
            avatarUrl: {
                type: Sequelize.STRING(256),
                allowNull: false,
                defaultValue: "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png"
            },
            firstName: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            strikes: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false
            },
            authorized: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            email: {
                type: Sequelize.STRING(256),
                allowNull: false,
                unique: true
            },
            phoneNumber: {
                type: Sequelize.STRING(14),
                allowNull: false,
                unique: true
            },
            studentRelation: {
                type: Sequelize.STRING(15),
                allowNull: false
            },
            hashedPassword: {
                type: Sequelize.STRING.BINARY,
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
