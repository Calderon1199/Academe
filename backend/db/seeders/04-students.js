'use strict';

const { Student, Sequelize } = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'Student';

if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        options.tableName = "Students";
        return queryInterface.bulkInsert(options, [
            {
                firstName: 'Scarlett',
                lastName: 'Stewart',
                grade: 0,
                companyId: 1,
                parentId: 1,
                schoolId: 1
            },
            {
                firstName: 'Ellie',
                lastName: 'Rogers',
                grade: 0,
                companyId: 1,
                parentId: 2,
                schoolId: 1
            },
            {
                firstName: 'Amelia',
                lastName: 'Rivera',
                grade: 0,
                companyId: 1,
                parentId: 3,
                schoolId: 1
            },
            {
                firstName: 'Aria',
                lastName: 'Rogers',
                grade: 0,
                companyId: 1,
                parentId: 4,
                schoolId: 1
            },
            {
                firstName: 'Sophia',
                lastName: 'Harris',
                grade: 0,
                companyId: 1,
                parentId: 5,
                schoolId: 1
            },
            {
                firstName: 'Avery',
                lastName: 'Hall',
                grade: 0,
                companyId: 1,
                parentId: 6,
                schoolId: 1
            },
            {
                firstName: 'Michael',
                lastName: 'Hall',
                grade: 0,
                companyId: 1,
                parentId: 7,
                schoolId: 1
            },
            {
                firstName: 'Aria',
                lastName: 'Ramirez',
                grade: 0,
                companyId: 1,
                parentId: 8,
                schoolId: 1
            },
            {
                firstName: 'John',
                lastName: 'Torres',
                grade: 0,
                companyId: 1,
                parentId: 9,
                schoolId: 1
            },
            {
                firstName: 'Anthony',
                lastName: 'Moore',
                grade: 0,
                companyId: 1,
                parentId: 10,
                schoolId: 1
            },
            {
                firstName: 'Matthew',
                lastName: 'Brown',
                grade: 1,
                companyId: 1,
                parentId: 11,
                schoolId: 1
            },
            {
                firstName: 'Riley',
                lastName: 'King',
                grade: 1,
                companyId: 1,
                parentId: 12,
                schoolId: 1
            },
            {
                firstName: 'Aiden',
                lastName: 'Taylor',
                grade: 1,
                companyId: 1,
                parentId: 13,
                schoolId: 1
            },
            {
                firstName: 'Sophia',
                lastName: 'Scott',
                grade: 1,
                companyId: 1,
                parentId: 14,
                schoolId: 1
            },
            {
                firstName: 'William',
                lastName: 'Robinson',
                grade: 1,
                companyId: 1,
                parentId: 15,
                schoolId: 1
            },
            {
                firstName: 'Luna',
                lastName: 'Garcia',
                grade: 1,
                companyId: 1,
                parentId: 16,
                schoolId: 1
            },
            {
                firstName: 'Sebastian',
                lastName: 'Bailey',
                grade: 1,
                companyId: 1,
                parentId: 17,
                schoolId: 1
            },
            {
                firstName: 'Isabella',
                lastName: 'Lewis',
                grade: 1,
                companyId: 1,
                parentId: 18,
                schoolId: 1
            },
            {
                firstName: 'Michael',
                lastName: 'Perez',
                grade: 1,
                companyId: 1,
                parentId: 19,
                schoolId: 1
            },
            {
                firstName: 'Ava',
                lastName: 'Perez',
                grade: 1,
                companyId: 1,
                parentId: 20,
                schoolId: 1
            },
            {
                firstName: 'Noah',
                lastName: 'Nelson',
                grade: 2,
                companyId: 1,
                parentId: 21,
                schoolId: 1
            },
            {
                firstName: 'Hannah',
                lastName: 'Young',
                grade: 2,
                companyId: 1,
                parentId: 22,
                schoolId: 1
            },
            {
                firstName: 'Owen',
                lastName: 'Richardson',
                grade: 2,
                companyId: 1,
                parentId: 23,
                schoolId: 1
            },
            {
                firstName: 'Aiden',
                lastName: 'Ramirez',
                grade: 2,
                companyId: 1,
                parentId: 24,
                schoolId: 1
            },
            {
                firstName: 'Sophia',
                lastName: 'Davis',
                grade: 2,
                companyId: 1,
                parentId: 25,
                schoolId: 1
            },
            {
                firstName: 'Nora',
                lastName: 'Richardson',
                grade: 2,
                companyId: 1,
                parentId: 26,
                schoolId: 1
            },
            {
                firstName: 'James',
                lastName: 'Clark',
                grade: 2,
                companyId: 1,
                parentId: 27,
                schoolId: 1
            },
            {
                firstName: 'Luna',
                lastName: 'Green',
                grade: 2,
                companyId: 1,
                parentId: 28,
                schoolId: 1
            },
            {
                firstName: 'Scarlett',
                lastName: 'Williams',
                grade: 2,
                companyId: 1,
                parentId: 29,
                schoolId: 1
            },
            {
                firstName: 'David',
                lastName: 'Evans',
                grade: 2,
                companyId: 1,
                parentId: 30,
                schoolId: 1
            },
            {
                firstName: 'Olivia',
                lastName: 'Taylor',
                grade: 3,
                companyId: 1,
                parentId: 31,
                schoolId: 1
            },
            {
                firstName: 'Henry',
                lastName: 'Anderson',
                grade: 3,
                companyId: 1,
                parentId: 32,
                schoolId: 1
            },
            {
                firstName: 'Sebastian',
                lastName: 'Richardson',
                grade: 3,
                companyId: 1,
                parentId: 33,
                schoolId: 1
            },
            {
                firstName: 'Carter',
                lastName: 'Cox',
                grade: 3,
                companyId: 1,
                parentId: 34,
                schoolId: 1
            },
            {
                firstName: 'Victoria',
                lastName: 'Jackson',
                grade: 3,
                companyId: 1,
                parentId: 35,
                schoolId: 1
            },
            {
                firstName: 'Victoria',
                lastName: 'Perez',
                grade: 3,
                companyId: 1,
                parentId: 36,
                schoolId: 1
            },
            {
                firstName: 'Jack',
                lastName: 'Cooper',
                grade: 3,
                companyId: 1,
                parentId: 37,
                schoolId: 1
            },
            {
                firstName: 'Lily',
                lastName: 'Harris',
                grade: 3,
                companyId: 1,
                parentId: 38,
                schoolId: 1
            },
            {
                firstName: 'William',
                lastName: 'Baker',
                grade: 3,
                companyId: 1,
                parentId: 39,
                schoolId: 1
            },
            {
                firstName: 'Wyatt',
                lastName: 'Taylor',
                grade: 3,
                companyId: 1,
                parentId: 40,
                schoolId: 1
            },
            {
                firstName: 'James',
                lastName: 'Bell',
                grade: 4,
                companyId: 1,
                parentId: 41,
                schoolId: 1
            },
            {
                firstName: 'Isaac',
                lastName: 'Harris',
                grade: 4,
                companyId: 1,
                parentId: 42,
                schoolId: 1
            },
            {
                firstName: 'Sofia',
                lastName: 'Brown',
                grade: 4,
                companyId: 1,
                parentId: 43,
                schoolId: 1
            },
            {
                firstName: 'Sophia',
                lastName: 'Smith',
                grade: 4,
                companyId: 1,
                parentId: 44,
                schoolId: 1
            },
            {
                firstName: 'Samuel',
                lastName: 'Hall',
                grade: 4,
                companyId: 1,
                parentId: 45,
                schoolId: 1
            },
            {
                firstName: 'Joseph',
                lastName: 'Thompson',
                grade: 4,
                companyId: 1,
                parentId: 46,
                schoolId: 1
            },
            {
                firstName: 'Liam',
                lastName: 'Phillips',
                grade: 4,
                companyId: 1,
                parentId: 47,
                schoolId: 1
            },
            {
                firstName: 'Grace',
                lastName: 'Morgan',
                grade: 4,
                companyId: 1,
                parentId: 48,
                schoolId: 1
            },
            {
                firstName: 'Jacob',
                lastName: 'King',
                grade: 4,
                companyId: 1,
                parentId: 49,
                schoolId: 1
            },
            {
                firstName: 'Ava',
                lastName: 'Carter',
                grade: 4,
                companyId: 1,
                parentId: 50,
                schoolId: 1
            },
            {
                firstName: 'Madison',
                lastName: 'Martinez',
                grade: 5,
                companyId: 1,
                parentId: 51,
                schoolId: 1
            },
            {
                firstName: 'Mia',
                lastName: 'Adams',
                grade: 5,
                companyId: 1,
                parentId: 52,
                schoolId: 1
            },
            {
                firstName: 'Sophia',
                lastName: 'Garcia',
                grade: 5,
                companyId: 1,
                parentId: 53,
                schoolId: 1
            },
            {
                firstName: 'Owen',
                lastName: 'Rodriguez',
                grade: 5,
                companyId: 1,
                parentId: 54,
                schoolId: 1
            },
            {
                firstName: 'Penelope',
                lastName: 'Campbell',
                grade: 5,
                companyId: 1,
                parentId: 55,
                schoolId: 1
            },
            {
                firstName: 'Sophia',
                lastName: 'Wright',
                grade: 5,
                companyId: 1,
                parentId: 56,
                schoolId: 1
            },
            {
                firstName: 'James',
                lastName: 'Roberts',
                grade: 5,
                companyId: 1,
                parentId: 57,
                schoolId: 1
            },
            {
                firstName: 'Owen',
                lastName: 'Morris',
                grade: 5,
                companyId: 1,
                parentId: 58,
                schoolId: 1
            },
            {
                firstName: 'Ella',
                lastName: 'Robinson',
                grade: 5,
                companyId: 1,
                parentId: 59,
                schoolId: 1
            },
            {
                firstName: 'Aria',
                lastName: 'Thomas',
                grade: 5,
                companyId: 1,
                parentId: 60,
                schoolId: 1
            },
            {
                firstName: 'Anthony',
                lastName: 'Lopez',
                grade: 6,
                companyId: 1,
                parentId: 61,
                schoolId: 1
            },
            {
                firstName: 'Jackson',
                lastName: 'Parker',
                grade: 6,
                companyId: 1,
                parentId: 62,
                schoolId: 1
            },
            {
                firstName: 'Avery',
                lastName: 'Howard',
                grade: 6,
                companyId: 1,
                parentId: 63,
                schoolId: 1
            },
            {
                firstName: 'Elijah',
                lastName: 'Rogers',
                grade: 6,
                companyId: 1,
                parentId: 64,
                schoolId: 1
            },
            {
                firstName: 'Sophia',
                lastName: 'Thomas',
                grade: 6,
                companyId: 1,
                parentId: 65,
                schoolId: 1
            },
            {
                firstName: 'Mia',
                lastName: 'Harris',
                grade: 6,
                companyId: 1,
                parentId: 66,
                schoolId: 1
            },
            {
                firstName: 'Madison',
                lastName: 'Anderson',
                grade: 6,
                companyId: 1,
                parentId: 67,
                schoolId: 1
            },
            {
                firstName: 'Levi',
                lastName: 'Rivera',
                grade: 6,
                companyId: 1,
                parentId: 68,
                schoolId: 1
            },
            {
                firstName: 'Ethan',
                lastName: 'Perez',
                grade: 6,
                companyId: 1,
                parentId: 69,
                schoolId: 1
            },
            {
                firstName: 'Samuel',
                lastName: 'Hernandez',
                grade: 6,
                companyId: 1,
                parentId: 70,
                schoolId: 1
            }
        ], {})
    },



    down: async (queryInterface, Sequelize) => {
        options.tableName = "Students";
        return queryInterface.dropTable(options.tableName);
    }
}
