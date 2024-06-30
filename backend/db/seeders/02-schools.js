'use strict';

const { School, Sequelize } = require('../models');
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
                companyId: 1,
                address: '3903 Richards blvd',
                state: 'CA',
                zipcode: '95624',
            },
            {
                name: 'Pleasant Grove Elementary School',
                phoneNumber: '2098285312',
                companyId: 1,
                address: '9173 Ellie Ranch Dr',
                state: 'CA',
                zipcode: '95624',
            },
            {
                name: 'Franklin Elementary School',
                phoneNumber: '5092187711',
                companyId: 1,
                address: '4413 Poppy street',
                state: 'CA',
                zipcode: '95624',
            },
            {
                name: 'McGarvey Elementary School',
                phoneNumber: '9433434565',
                companyId: 1,
                address: '4403 leaf village ct',
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
