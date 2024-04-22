'use strict';

const { Company, Sequelize } = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'School';

if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        options.tableName = "Schools";
        return queryInterface.bulkInsert(options, [
            {
                name: 'Elk Grove Elementary School',
                phoneNumber: '9162384938',
                address: '3903 Richards blvd',
                state: 'CA',
                zipcode: '95624',
            },
            {
                name: 'Pleasant Grove Elementary School',
                phoneNumber: '2098285312',
                address: '9173 Ellie Ranch Dr',
                state: 'CA',
                zipcode: '95624',
            },
            {
                name: 'Franklin Elementary School',
                phoneNumber: '5092187711',
                address: '4413 Poppy street',
                state: 'CA',
                zipcode: '95624',
            },
        ], {})
    },



    down: async (queryInterface, Sequelize) => {
        options.tableName = "Schools";
        return queryInterface.dropTable(options.tableName);
    }
}
