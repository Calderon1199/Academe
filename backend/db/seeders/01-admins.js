'use strict';

const {Admin, Sequelize} = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'Admin';

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
      options.tableName = "Admins";
      return queryInterface.bulkInsert(options, [
        {
          email: 'demo@user.io',
          firstName: 'Daniel',
          lastName: 'Calderon',
          role: 'Enhancement Coach, Site Coordinator',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'demo2@user.io',
          firstName: 'Stephanie',
          lastName: 'Calderon',
          role: 'Coach',
          hashedPassword: bcrypt.hashSync('password2'),
        },
        {
          email: 'demo3@user.io',
          firstName: 'Geovanni',
          lastName: 'Calderon',
          role: 'Coach',
          hashedPassword: bcrypt.hashSync('password3'),
        }
      ], {})
    },



    down: async (queryInterface, Sequelize) => {
      options.tableName = "Admins";
      return queryInterface.dropTable(options.tableName);
    }
  }
