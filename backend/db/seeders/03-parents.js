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
                phoneNumber: '8974358979',
                studentRelation: 'Mother',
                email: 'parent@user.io',
                firstName: 'Nailea',
                lastName: 'Vidrio',
                hashedPassword: bcrypt.hashSync('password'),
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9169281543',
                studentRelation: 'Mother',
                email: 'parent2@user.io',
                firstName: 'Juliana',
                lastName: 'Morgan',
                hashedPassword: bcrypt.hashSync('PsXPYas1')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '8743986778',
                studentRelation: 'Father',
                email: 'parent3@user.io',
                firstName: 'Aiden',
                lastName: 'Green',
                hashedPassword: bcrypt.hashSync('SGtF2OJZ')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9084536389',
                studentRelation: 'Mother',
                email: 'parent4@user.io',
                firstName: 'Alexandria',
                lastName: 'Vidrio',
                hashedPassword: bcrypt.hashSync('b8OZEFLa')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '8427397578',
                studentRelation: 'Mother',
                email: 'parent5@user.io',
                firstName: 'Nailea',
                lastName: 'Ramirez',
                hashedPassword: bcrypt.hashSync('dZiXYRUF')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '7892348759',
                studentRelation: 'Mother',
                email: 'parent6@user.io',
                firstName: 'Tiffany',
                lastName: 'Scott',
                hashedPassword: bcrypt.hashSync('gYhUxrCu')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '4892756897',
                studentRelation: 'Mother',
                email: 'parent7@user.io',
                firstName: 'Gabriella',
                lastName: 'Hernandez',
                hashedPassword: bcrypt.hashSync('pj4kTBmc')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '7854698747',
                studentRelation: 'Mother',
                email: 'parent8@user.io',
                firstName: 'Laila',
                lastName: 'Mitchell',
                hashedPassword: bcrypt.hashSync('uoSdsmyZ')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '8776435874',
                studentRelation: 'Mother',
                email: 'parent9@user.io',
                firstName: 'Nailea',
                lastName: 'Green',
                hashedPassword: bcrypt.hashSync('Pk3fBZi5')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '3485729879',
                studentRelation: 'Mother',
                email: 'parent10@user.io',
                firstName: 'Ellie',
                lastName: 'Harris',
                hashedPassword: bcrypt.hashSync('nrFgwse7')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '4524565462',
                studentRelation: 'Mother',
                email: 'parent11@user.io',
                firstName: 'Angela',
                lastName: 'Lee',
                hashedPassword: bcrypt.hashSync('bpbE6rNA')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '4397256892',
                studentRelation: 'Mother',
                email: 'parent12@user.io',
                firstName: 'Helena',
                lastName: 'Rivera',
                hashedPassword: bcrypt.hashSync('Pc7xY2if')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '8943975834',
                studentRelation: 'Father',
                email: 'parent13@user.io',
                firstName: 'Isaac',
                lastName: 'Nguyen',
                hashedPassword: bcrypt.hashSync('Rz5ypmeD')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '5468782480',
                studentRelation: 'Father',
                email: 'parent14@user.io',
                firstName: 'Ethan',
                lastName: 'Nguyen',
                hashedPassword: bcrypt.hashSync('EMQIsqdO')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '3427859889',
                studentRelation: 'Mother',
                email: 'parent15@user.io',
                firstName: 'Emma',
                lastName: 'Thompson',
                hashedPassword: bcrypt.hashSync('WPClJ1xt')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '5438927843',
                studentRelation: 'Father',
                email: 'parent16@user.io',
                firstName: 'Grayson',
                lastName: 'Rodriguez',
                hashedPassword: bcrypt.hashSync('a33TqRTu')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '6856385438',
                studentRelation: 'Mother',
                email: 'parent17@user.io',
                firstName: 'Sophia',
                lastName: 'Rivera',
                hashedPassword: bcrypt.hashSync('rfE4X4iE')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '5868488375',
                studentRelation: 'Father',
                email: 'parent18@user.io',
                firstName: 'Joseph',
                lastName: 'White',
                hashedPassword: bcrypt.hashSync('0gCalsB2')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '3027698768',
                studentRelation: 'Father',
                email: 'parent19@user.io',
                firstName: 'Mason',
                lastName: 'Lewis',
                hashedPassword: bcrypt.hashSync('6yFjbX5c')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '2097659385',
                studentRelation: 'Father',
                email: 'parent20@user.io',
                firstName: 'Mason',
                lastName: 'Adams',
                hashedPassword: bcrypt.hashSync('rYh0wt9e')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '7544546574',
                studentRelation: 'Father',
                email: 'parent21@user.io',
                firstName: 'Anthony',
                lastName: 'Adams',
                hashedPassword: bcrypt.hashSync('HzK3YlEA')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '4345679845',
                studentRelation: 'Father',
                email: 'parent22@user.io',
                firstName: 'Samuel',
                lastName: 'Anderson',
                hashedPassword: bcrypt.hashSync('LBmZKlrf')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '7685649374',
                studentRelation: 'Father',
                email: 'parent23@user.io',
                firstName: 'Noah',
                lastName: 'Baker',
                hashedPassword: bcrypt.hashSync('0iWVWvUg')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '3327679395',
                studentRelation: 'Father',
                email: 'parent24@user.io',
                firstName: 'Carter',
                lastName: 'Scott',
                hashedPassword: bcrypt.hashSync('zQc9GoO8')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9165438584',
                studentRelation: 'Father',
                email: 'parent25@user.io',
                firstName: 'Joseph',
                lastName: 'Perez',
                hashedPassword: bcrypt.hashSync('LiZSoDNB')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '3297475646',
                studentRelation: 'Father',
                email: 'parent26@user.io',
                firstName: 'Grayson',
                lastName: 'Stewart',
                hashedPassword: bcrypt.hashSync('eeRoyFkY')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '3239195684',
                studentRelation: 'Mother',
                email: 'parent27@user.io',
                firstName: 'Isabella',
                lastName: 'Ramirez',
                hashedPassword: bcrypt.hashSync('A1jD99qJ')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '2091433276',
                studentRelation: 'Father',
                email: 'parent28@user.io',
                firstName: 'Wyatt',
                lastName: 'Harris',
                hashedPassword: bcrypt.hashSync('53ziGKQJ')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '2094584532',
                studentRelation: 'Mother',
                email: 'parent29@user.io',
                firstName: 'Nailea',
                lastName: 'King',
                hashedPassword: bcrypt.hashSync('dPQ10oUZ')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '2096749876',
                studentRelation: 'Father',
                email: 'parent30@user.io',
                firstName: 'Grayson',
                lastName: 'Lee',
                hashedPassword: bcrypt.hashSync('8S2aU4ib')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9161123436',
                studentRelation: 'Father',
                email: 'parent31@user.io',
                firstName: 'Anthony',
                lastName: 'Anderson',
                hashedPassword: bcrypt.hashSync('yEkYeVs7')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9164536754',
                studentRelation: 'Father',
                email: 'parent32@user.io',
                firstName: 'Isaac',
                lastName: 'Baker',
                hashedPassword: bcrypt.hashSync('3644aaaH')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166712274',
                studentRelation: 'Father',
                email: 'parent33@user.io',
                firstName: 'Elijah',
                lastName: 'Vidrio',
                hashedPassword: bcrypt.hashSync('w1JWGFzK')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166652134',
                studentRelation: 'Father',
                email: 'parent34@user.io',
                firstName: 'Isaac',
                lastName: 'Rogers',
                hashedPassword: bcrypt.hashSync('I1k2rEhI')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9106714343',
                studentRelation: 'Mother',
                email: 'parent35@user.io',
                firstName: 'Isabella',
                lastName: 'Hall',
                hashedPassword: bcrypt.hashSync('nIl6RbkW')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166714433',
                studentRelation: 'Father',
                email: 'parent36@user.io',
                firstName: 'Jackson',
                lastName: 'Stewart',
                hashedPassword: bcrypt.hashSync('W5i9yyT9')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166716759',
                studentRelation: 'Father',
                email: 'parent37@user.io',
                firstName: 'Owen',
                lastName: 'Wilson',
                hashedPassword: bcrypt.hashSync('982VBezE')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166653232',
                studentRelation: 'Father',
                email: 'parent38@user.io',
                firstName: 'Ethan',
                lastName: 'Robinson',
                hashedPassword: bcrypt.hashSync('yms1yZTM')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166712243',
                studentRelation: 'Mother',
                email: 'parent39@user.io',
                firstName: 'Ava',
                lastName: 'Roberts',
                hashedPassword: bcrypt.hashSync('JaG0GgKn')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9162234343',
                studentRelation: 'Mother',
                email: 'parent40@user.io',
                firstName: 'Olivia',
                lastName: 'Perez',
                hashedPassword: bcrypt.hashSync('jnkSPaEe')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '4435497676',
                studentRelation: 'Father',
                email: 'parent41@user.io',
                firstName: 'William',
                lastName: 'Taylor',
                hashedPassword: bcrypt.hashSync('ZVQNSfoV')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9165514343',
                studentRelation: 'Father',
                email: 'parent42@user.io',
                firstName: 'Sebastian',
                lastName: 'Phillips',
                hashedPassword: bcrypt.hashSync('iVowvoxd')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9164414343',
                studentRelation: 'Father',
                email: 'parent43@user.io',
                firstName: 'Jackson',
                lastName: 'Campbell',
                hashedPassword: bcrypt.hashSync('4PcHxY4x')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '1213425659',
                studentRelation: 'Father',
                email: 'parent44@user.io',
                firstName: 'Daniel',
                lastName: 'Wright',
                hashedPassword: bcrypt.hashSync('uK0cuNrx')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '6535464341',
                studentRelation: 'Father',
                email: 'parent45@user.io',
                firstName: 'Alexander',
                lastName: 'Morgan',
                hashedPassword: bcrypt.hashSync('fwjbsKFu')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166915438',
                studentRelation: 'Father',
                email: 'parent46@user.io',
                firstName: 'Henry',
                lastName: 'Clark',
                hashedPassword: bcrypt.hashSync('h7ssdz8Z')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166711111',
                studentRelation: 'Father',
                email: 'parent47@user.io',
                firstName: 'Grayson',
                lastName: 'Sanchez',
                hashedPassword: bcrypt.hashSync('THWV1EyM')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166712121',
                studentRelation: 'Father',
                email: 'parent48@user.io',
                firstName: 'Gabriel',
                lastName: 'Miller',
                hashedPassword: bcrypt.hashSync('BXxZDvWz')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166713232',
                studentRelation: 'Father',
                email: 'parent49@user.io',
                firstName: 'Jackson',
                lastName: 'Thompson',
                hashedPassword: bcrypt.hashSync('wvLY1DdY')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9174561234',
                studentRelation: 'Father',
                email: 'parent50@user.io',
                firstName: 'Julian',
                lastName: 'Nguyen',
                hashedPassword: bcrypt.hashSync('ej3dtR44')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '5596054347',
                studentRelation: 'Mother',
                email: 'parent51@user.io',
                firstName: 'Isabella',
                lastName: 'Garcia',
                hashedPassword: bcrypt.hashSync('MrWtrjra')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166711122',
                studentRelation: 'Father',
                email: 'parent52@user.io',
                firstName: 'Jacob',
                lastName: 'Flores',
                hashedPassword: bcrypt.hashSync('4Ygu7uEu')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '6096714343',
                studentRelation: 'Father',
                email: 'parent53@user.io',
                firstName: 'Aiden',
                lastName: 'Rivera',
                hashedPassword: bcrypt.hashSync('njb81hMA')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166569988',
                studentRelation: 'Father',
                email: 'parent54@user.io',
                firstName: 'Samuel',
                lastName: 'Brown',
                hashedPassword: bcrypt.hashSync('QbuWULUr')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166714141',
                studentRelation: 'Father',
                email: 'parent55@user.io',
                firstName: 'Wyatt',
                lastName: 'Stewart',
                hashedPassword: bcrypt.hashSync('6OjTsXGU')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '6436714343',
                studentRelation: 'Father',
                email: 'parent56@user.io',
                firstName: 'Henry',
                lastName: 'Martin',
                hashedPassword: bcrypt.hashSync('FJh6j02k')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '3697547860',
                studentRelation: 'Father',
                email: 'parent57@user.io',
                firstName: 'Gabriel',
                lastName: 'Phillips',
                hashedPassword: bcrypt.hashSync('E8xnyFO6')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '3219870019',
                studentRelation: 'Father',
                email: 'parent58@user.io',
                firstName: 'Luke',
                lastName: 'Thompson',
                hashedPassword: bcrypt.hashSync('IyjygY8x')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '3057658762',
                studentRelation: 'Father',
                email: 'parent59@user.io',
                firstName: 'Henry',
                lastName: 'Miller',
                hashedPassword: bcrypt.hashSync('n74O0hyK')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9130714343',
                studentRelation: 'Father',
                email: 'parent60@user.io',
                firstName: 'David',
                lastName: 'Lee',
                hashedPassword: bcrypt.hashSync('RkemexPf')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9136714343',
                studentRelation: 'Father',
                email: 'parent61@user.io',
                firstName: 'Anthony',
                lastName: 'Parker',
                hashedPassword: bcrypt.hashSync('0owRxP7n')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '543714343',
                studentRelation: 'Father',
                email: 'parent62@user.io',
                firstName: 'Dylan',
                lastName: 'Davis',
                hashedPassword: bcrypt.hashSync('zdn8eex2')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166714343',
                studentRelation: 'Brother',
                email: 'parent63@user.io',
                firstName: 'Gabriel',
                lastName: 'Morgan',
                hashedPassword: bcrypt.hashSync('VLEkNJx2')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '99314343',
                studentRelation: 'Father',
                email: 'parent64@user.io',
                firstName: 'Carter',
                lastName: 'Adams',
                hashedPassword: bcrypt.hashSync('bG08i8cO')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '5366714343',
                studentRelation: 'Father',
                email: 'parent65@user.io',
                firstName: 'Wyatt',
                lastName: 'Gonzalez',
                hashedPassword: bcrypt.hashSync('nE5GFkvc')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '2096714343',
                studentRelation: 'Mother',
                email: 'parent66@user.io',
                firstName: 'Nailea',
                lastName: 'King',
                hashedPassword: bcrypt.hashSync('DeNBB0it')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166751343',
                studentRelation: 'Father',
                email: 'parent67@user.io',
                firstName: 'Julian',
                lastName: 'Lee',
                hashedPassword: bcrypt.hashSync('at1NItpX')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9169214543',
                studentRelation: 'Father',
                email: 'parent68@user.io',
                firstName: 'William',
                lastName: 'Nelson',
                hashedPassword: bcrypt.hashSync('je00sT1y')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9161714343',
                studentRelation: 'Father',
                email: 'parent69@user.io',
                firstName: 'Benjamin',
                lastName: 'Turner',
                hashedPassword: bcrypt.hashSync('qSwKqTpb')
            },
            {
                companyId: 1,
                schoolId: 1,
                phoneNumber: '9166414343',
                studentRelation: 'Father',
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
