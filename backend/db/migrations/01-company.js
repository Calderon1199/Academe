'use strict';

let options = {};
options.tableName = 'Companies';
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
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phoneNumber: {
                type: Sequelize.STRING(13),
                allowNull: false,
                unique: true
            },
            address: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            state: {
                type: Sequelize.STRING(2),
                allowNull: false
            },
            zipcode: {
                type: Sequelize.STRING(10),
                allowNull: false
            },
            logo: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg"
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
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
