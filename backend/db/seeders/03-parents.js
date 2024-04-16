'use strict';

const { Parent, Sequelize } = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'Parent';

if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        options.tableName = "Parents";
        return queryInterface.bulkInsert(options, [
            {
                companyId: 1,
                schoolId: 1,
                studentId: 1,
                email: 'parent@user.io',
                firstName: 'Nailea',
                lastName: 'Vidrio',
                hashedPassword: bcrypt.hashSync('password'),
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 2,
                email: 'parent2@user.io',
                firstName: 'Julian',
                lastName: 'Morgan',
                hashedPassword: bcrypt.hashSync('PsXPYas1')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 3,
                email: 'parent3@user.io',
                firstName: 'Aiden',
                lastName: 'Green',
                hashedPassword: bcrypt.hashSync('SGtF2OJZ')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 4,
                email: 'parent4@user.io',
                firstName: 'Alexander',
                lastName: 'Vidrio',
                hashedPassword: bcrypt.hashSync('b8OZEFLa')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 5,
                email: 'parent5@user.io',
                firstName: 'Nailea',
                lastName: 'Ramirez',
                hashedPassword: bcrypt.hashSync('dZiXYRUF')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 6,
                email: 'parent6@user.io',
                firstName: 'Carter',
                lastName: 'Scott',
                hashedPassword: bcrypt.hashSync('gYhUxrCu')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 7,
                email: 'parent7@user.io',
                firstName: 'Anthony',
                lastName: 'Hernandez',
                hashedPassword: bcrypt.hashSync('pj4kTBmc')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 8,
                email: 'parent8@user.io',
                firstName: 'Aiden',
                lastName: 'Mitchell',
                hashedPassword: bcrypt.hashSync('uoSdsmyZ')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 9,
                email: 'parent9@user.io',
                firstName: 'Nailea',
                lastName: 'Green',
                hashedPassword: bcrypt.hashSync('Pk3fBZi5')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 10,
                email: 'parent10@user.io',
                firstName: 'Grayson',
                lastName: 'Harris',
                hashedPassword: bcrypt.hashSync('nrFgwse7')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 11,
                email: 'parent11@user.io',
                firstName: 'Noah',
                lastName: 'Lee',
                hashedPassword: bcrypt.hashSync('bpbE6rNA')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 12,
                email: 'parent12@user.io',
                firstName: 'Anthony',
                lastName: 'Rivera',
                hashedPassword: bcrypt.hashSync('Pc7xY2if')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 13,
                email: 'parent13@user.io',
                firstName: 'Isaac',
                lastName: 'Nguyen',
                hashedPassword: bcrypt.hashSync('Rz5ypmeD')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 14,
                email: 'parent14@user.io',
                firstName: 'Ethan',
                lastName: 'Nguyen',
                hashedPassword: bcrypt.hashSync('EMQIsqdO')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 15,
                email: 'parent15@user.io',
                firstName: 'Emma',
                lastName: 'Thompson',
                hashedPassword: bcrypt.hashSync('WPClJ1xt')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 16,
                email: 'parent16@user.io',
                firstName: 'Grayson',
                lastName: 'Rodriguez',
                hashedPassword: bcrypt.hashSync('a33TqRTu')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 17,
                email: 'parent17@user.io',
                firstName: 'Sophia',
                lastName: 'Rivera',
                hashedPassword: bcrypt.hashSync('rfE4X4iE')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 18,
                email: 'parent18@user.io',
                firstName: 'Joseph',
                lastName: 'White',
                hashedPassword: bcrypt.hashSync('0gCalsB2')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 19,
                email: 'parent19@user.io',
                firstName: 'Mason',
                lastName: 'Lewis',
                hashedPassword: bcrypt.hashSync('6yFjbX5c')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 20,
                email: 'parent20@user.io',
                firstName: 'Mason',
                lastName: 'Adams',
                hashedPassword: bcrypt.hashSync('rYh0wt9e')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 21,
                email: 'parent21@user.io',
                firstName: 'Anthony',
                lastName: 'Adams',
                hashedPassword: bcrypt.hashSync('HzK3YlEA')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 22,
                email: 'parent22@user.io',
                firstName: 'Samuel',
                lastName: 'Anderson',
                hashedPassword: bcrypt.hashSync('LBmZKlrf')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 23,
                email: 'parent23@user.io',
                firstName: 'Noah',
                lastName: 'Baker',
                hashedPassword: bcrypt.hashSync('0iWVWvUg')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 24,
                email: 'parent24@user.io',
                firstName: 'Carter',
                lastName: 'Scott',
                hashedPassword: bcrypt.hashSync('zQc9GoO8')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 25,
                email: 'parent25@user.io',
                firstName: 'Joseph',
                lastName: 'Perez',
                hashedPassword: bcrypt.hashSync('LiZSoDNB')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 26,
                email: 'parent26@user.io',
                firstName: 'Grayson',
                lastName: 'Stewart',
                hashedPassword: bcrypt.hashSync('eeRoyFkY')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 27,
                email: 'parent27@user.io',
                firstName: 'Isabella',
                lastName: 'Ramirez',
                hashedPassword: bcrypt.hashSync('A1jD99qJ')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 28,
                email: 'parent28@user.io',
                firstName: 'Wyatt',
                lastName: 'Harris',
                hashedPassword: bcrypt.hashSync('53ziGKQJ')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 29,
                email: 'parent29@user.io',
                firstName: 'Nailea',
                lastName: 'King',
                hashedPassword: bcrypt.hashSync('dPQ10oUZ')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 30,
                email: 'parent30@user.io',
                firstName: 'Grayson',
                lastName: 'Lee',
                hashedPassword: bcrypt.hashSync('8S2aU4ib')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 31,
                email: 'parent31@user.io',
                firstName: 'Anthony',
                lastName: 'Anderson',
                hashedPassword: bcrypt.hashSync('yEkYeVs7')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 32,
                email: 'parent32@user.io',
                firstName: 'Isaac',
                lastName: 'Baker',
                hashedPassword: bcrypt.hashSync('3644aaaH')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 33,
                email: 'parent33@user.io',
                firstName: 'Elijah',
                lastName: 'Vidrio',
                hashedPassword: bcrypt.hashSync('w1JWGFzK')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 34,
                email: 'parent34@user.io',
                firstName: 'Isaac',
                lastName: 'Rogers',
                hashedPassword: bcrypt.hashSync('I1k2rEhI')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 35,
                email: 'parent35@user.io',
                firstName: 'Isabella',
                lastName: 'Hall',
                hashedPassword: bcrypt.hashSync('nIl6RbkW')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 36,
                email: 'parent36@user.io',
                firstName: 'Jackson',
                lastName: 'Stewart',
                hashedPassword: bcrypt.hashSync('W5i9yyT9')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 37,
                email: 'parent37@user.io',
                firstName: 'Owen',
                lastName: 'Wilson',
                hashedPassword: bcrypt.hashSync('982VBezE')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 38,
                email: 'parent38@user.io',
                firstName: 'Ethan',
                lastName: 'Robinson',
                hashedPassword: bcrypt.hashSync('yms1yZTM')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 39,
                email: 'parent39@user.io',
                firstName: 'Ava',
                lastName: 'Roberts',
                hashedPassword: bcrypt.hashSync('JaG0GgKn')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 40,
                email: 'parent40@user.io',
                firstName: 'Olivia',
                lastName: 'Perez',
                hashedPassword: bcrypt.hashSync('jnkSPaEe')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 41,
                email: 'parent41@user.io',
                firstName: 'William',
                lastName: 'Taylor',
                hashedPassword: bcrypt.hashSync('ZVQNSfoV')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 42,
                email: 'parent42@user.io',
                firstName: 'Sebastian',
                lastName: 'Phillips',
                hashedPassword: bcrypt.hashSync('iVowvoxd')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 43,
                email: 'parent43@user.io',
                firstName: 'Jackson',
                lastName: 'Campbell',
                hashedPassword: bcrypt.hashSync('4PcHxY4x')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 44,
                email: 'parent44@user.io',
                firstName: 'Daniel',
                lastName: 'Wright',
                hashedPassword: bcrypt.hashSync('uK0cuNrx')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 45,
                email: 'parent45@user.io',
                firstName: 'Alexander',
                lastName: 'Morgan',
                hashedPassword: bcrypt.hashSync('fwjbsKFu')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 46,
                email: 'parent46@user.io',
                firstName: 'Henry',
                lastName: 'Clark',
                hashedPassword: bcrypt.hashSync('h7ssdz8Z')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 47,
                email: 'parent47@user.io',
                firstName: 'Grayson',
                lastName: 'Sanchez',
                hashedPassword: bcrypt.hashSync('THWV1EyM')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 48,
                email: 'parent48@user.io',
                firstName: 'Gabriel',
                lastName: 'Miller',
                hashedPassword: bcrypt.hashSync('BXxZDvWz')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 49,
                email: 'parent49@user.io',
                firstName: 'Jackson',
                lastName: 'Thompson',
                hashedPassword: bcrypt.hashSync('wvLY1DdY')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 50,
                email: 'parent50@user.io',
                firstName: 'Julian',
                lastName: 'Nguyen',
                hashedPassword: bcrypt.hashSync('ej3dtR44')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 51,
                email: 'parent51@user.io',
                firstName: 'Isabella',
                lastName: 'Garcia',
                hashedPassword: bcrypt.hashSync('MrWtrjra')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 52,
                email: 'parent52@user.io',
                firstName: 'Jacob',
                lastName: 'Flores',
                hashedPassword: bcrypt.hashSync('4Ygu7uEu')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 53,
                email: 'parent53@user.io',
                firstName: 'Aiden',
                lastName: 'Rivera',
                hashedPassword: bcrypt.hashSync('njb81hMA')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 54,
                email: 'parent54@user.io',
                firstName: 'Samuel',
                lastName: 'Brown',
                hashedPassword: bcrypt.hashSync('QbuWULUr')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 55,
                email: 'parent55@user.io',
                firstName: 'Wyatt',
                lastName: 'Stewart',
                hashedPassword: bcrypt.hashSync('6OjTsXGU')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 56,
                email: 'parent56@user.io',
                firstName: 'Henry',
                lastName: 'Martin',
                hashedPassword: bcrypt.hashSync('FJh6j02k')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 57,
                email: 'parent57@user.io',
                firstName: 'Gabriel',
                lastName: 'Phillips',
                hashedPassword: bcrypt.hashSync('E8xnyFO6')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 58,
                email: 'parent58@user.io',
                firstName: 'Luke',
                lastName: 'Thompson',
                hashedPassword: bcrypt.hashSync('IyjygY8x')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 59,
                email: 'parent59@user.io',
                firstName: 'Henry',
                lastName: 'Miller',
                hashedPassword: bcrypt.hashSync('n74O0hyK')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 60,
                email: 'parent60@user.io',
                firstName: 'David',
                lastName: 'Lee',
                hashedPassword: bcrypt.hashSync('RkemexPf')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 61,
                email: 'parent61@user.io',
                firstName: 'Anthony',
                lastName: 'Parker',
                hashedPassword: bcrypt.hashSync('0owRxP7n')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 62,
                email: 'parent62@user.io',
                firstName: 'Dylan',
                lastName: 'Davis',
                hashedPassword: bcrypt.hashSync('zdn8eex2')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 63,
                email: 'parent63@user.io',
                firstName: 'Gabriel',
                lastName: 'Morgan',
                hashedPassword: bcrypt.hashSync('VLEkNJx2')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 64,
                email: 'parent64@user.io',
                firstName: 'Carter',
                lastName: 'Adams',
                hashedPassword: bcrypt.hashSync('bG08i8cO')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 65,
                email: 'parent65@user.io',
                firstName: 'Wyatt',
                lastName: 'Gonzalez',
                hashedPassword: bcrypt.hashSync('nE5GFkvc')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 66,
                email: 'parent66@user.io',
                firstName: 'Nailea',
                lastName: 'King',
                hashedPassword: bcrypt.hashSync('DeNBB0it')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 67,
                email: 'parent67@user.io',
                firstName: 'Julian',
                lastName: 'Lee',
                hashedPassword: bcrypt.hashSync('at1NItpX')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 68,
                email: 'parent68@user.io',
                firstName: 'William',
                lastName: 'Nelson',
                hashedPassword: bcrypt.hashSync('je00sT1y')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 69,
                email: 'parent69@user.io',
                firstName: 'Benjamin',
                lastName: 'Turner',
                hashedPassword: bcrypt.hashSync('qSwKqTpb')
            },
            {
                companyId: 1,
                schoolId: 1,
                studentId: 70,
                email: 'parent70@user.io',
                firstName: 'Isaac',
                lastName: 'Hernandez',
                hashedPassword: bcrypt.hashSync('lsF2bedp')
            }
        ], {})
    },



    down: async (queryInterface, Sequelize) => {
        options.tableName = "Parents";
        return queryInterface.dropTable(options.tableName);
    }
}
