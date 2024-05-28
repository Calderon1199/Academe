const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Report, Company } = require('../../db/models');
const { where } = require('sequelize');

const router = express.Router();

//backend validation for signup
// const validateAdminSignup = [
//     check('email')
//         .exists({ checkFalsy: true }).withMessage('Please provide an email')
//         .isEmail().withMessage('Please provide a valid email.')
//         .notEmpty().withMessage('Please provide an email.')
//     check('firstName')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a first name.')
//         .isAlpha().withMessage('Must only contain letters.')
//         .notEmpty().withMessage('Please provide a name.')
//         .isLength({ min: 2, max: 30 })
//         .withMessage('First name must be between 2 and 30 characters.'),
//     check('lastName')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a last name.')
//         .isAlpha().withMessage('Must only contain letters.')
//         .notEmpty().withMessage('Please provide a name.')
//         .isLength({ min: 2, max: 50 })
//         .withMessage('Last name must be between 2 and 50 characters.'),
// ];

// Sign up
router.get('/', requireAuth, async (req, res, next) => {
    const {id} = req.user;
    const {userType} = req.cookies;
    let reports;

    switch (userType) {
        case 'company':
            reports = await Report.findAll({
                where: {companyId: id},
                order: [['createdAt', 'DESC']]
            });
            break;
        case 'admin':
            reports = await Report.findAll({
                where: {adminId: id},
                order: [['createdAt', 'DESC']]
            });
            break;
        case 'parent':
            reports = await Report.findAll({
                where: {parentId: id},
                order: [['createdAt', 'DESC']]
            });
            break;
        default:
            const err = new Error('Invalid user type');
            err.status = 400;
            err.title = 'Invalid user type';
            err.errors = { userType: 'The provided user type is invalid.' };
            return next(err);
   }


    return res.send({
        reports
    });
});



module.exports = router;