'use strict';

const { Report, Sequelize } = require('../models');
const bcrypt = require('bcryptjs');


let options = {};
options.tableName = 'Report';

if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        options.tableName = "Reports";
        return queryInterface.bulkInsert(options, [
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: false,
                notes: "Had a bit of trouble focusing today but showed improvement after redirection.",
                behaviorScore: 2
            },
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: true,
                notes: "Participated enthusiastically in group activities and helped peers who were struggling.",
                behaviorScore: 3
            },
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: false,
                notes: "Struggled with following instructions today but showed improvement towards the end of the session.",
                behaviorScore: 2
            },
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: true,
                notes: "Completed homework promptly and assisted classmates with their assignments.",
                behaviorScore: 3
            },
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: false,
                notes: "Had difficulty staying on task today but responded well to encouragement from staff.",
                behaviorScore: 2
            },
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: true,
                notes: "Showed great leadership skills today by organizing a group game during free time.",
                behaviorScore: 3
            },
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: false,
                notes: "Needed reminders to stay focused but eventually completed tasks with diligence.",
                behaviorScore: 2
            },
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: true,
                notes: "Displayed exemplary behavior by assisting younger students during group activities.",
                behaviorScore: 3
            },
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: false,
                notes: "Struggled with following instructions but showed persistence in completing tasks.",
                behaviorScore: 2
            },
            {
                studentId: 1,
                parentId: 1,
                companyId: 1,
                hwCompletion: true,
                notes: "Demonstrated excellent teamwork skills during group projects.",
                behaviorScore: 3
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: false,
                notes: "Had a rough start but showed great improvement in behavior after lunch break.",
                behaviorScore: 2
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: true,
                notes: "Displayed excellent problem-solving skills during group activities.",
                behaviorScore: 3
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: false,
                notes: "Struggled with following directions but showed enthusiasm in creative tasks.",
                behaviorScore: 2
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: true,
                notes: "Participated actively in discussions and provided insightful answers.",
                behaviorScore: 3
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: false,
                notes: "Needed occasional reminders to stay focused but overall showed improvement.",
                behaviorScore: 2
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: true,
                notes: "Took initiative to help organize classroom materials without being asked.",
                behaviorScore: 3
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: false,
                notes: "Struggled with peer interactions initially but showed resilience in resolving conflicts.",
                behaviorScore: 2
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: true,
                notes: "Demonstrated leadership skills by leading a group discussion on a challenging topic.",
                behaviorScore: 3
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: false,
                notes: "Had difficulty focusing during independent work but participated actively in group tasks.",
                behaviorScore: 2
            },
            {
                studentId: 2,
                parentId: 2,
                companyId: 1,
                hwCompletion: true,
                notes: "Showed empathy towards classmates who were struggling with assignments.",
                behaviorScore: 3
            }
        ], {})
    },



    down: async (queryInterface, Sequelize) => {
        options.tableName = "Reports";
        return queryInterface.dropTable(options.tableName);
    }
}
