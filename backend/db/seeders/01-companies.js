'use strict';

const { Company, Sequelize } = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'Company';

if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        options.tableName = "Companies";
        return queryInterface.bulkInsert(options, [
            {
                name: 'Assist Programs',
                phoneNumber: '9168962438',
                address: '9273 onyx drive',
                state: 'CA',
                zipcode: '95624',
                email: 'calderon.assist@gmail.com',
                hashedPassword: bcrypt.hashSync('password'),
            },
            {
                name: 'Catalyst',
                phoneNumber: '9167312476',
                address: '1193 bond road',
                state: 'CA',
                zipcode: '95624',
                email: 'calderon.catalyst@gmail.com',
                hashedPassword: bcrypt.hashSync('password'),
            },
            {
                name: 'Golden Valley',
                phoneNumber: '9164389071',
                address: '2193 marigold street',
                state: 'CA',
                zipcode: '95624',
                email: 'calderon.goldenvalley@gmail.com',
                hashedPassword: bcrypt.hashSync('password'),
            },
        ], {})
    },



    down: async (queryInterface, Sequelize) => {
        options.tableName = "Companies";
        return queryInterface.dropTable(options.tableName);
    }
}
