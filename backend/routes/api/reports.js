const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Report, Admin, School,  } = require('../../db/models');
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

//

router.get('/', requireAuth, async (req, res, next) => {
    const { id } = req.user;
    const { userType } = req.cookies;
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;
    let reports;

    try {
        switch (userType) {
            case 'company':
                reports = await Report.findAndCountAll({
                    where: { companyId: id },
                    include: [{ model: School, required: true }, {model: Admin, required: true}],
                    order: [['createdAt', 'DESC']],
                    limit,
                    offset
                });
                break;
            case 'admin':
                reports = await Report.findAndCountAll({
                    where: { adminId: id },
                    order: [['createdAt', 'DESC']],
                    limit,
                    offset
                });
                break;
            case 'parent':
                reports = await Report.findAndCountAll({
                    where: { parentId: id },
                    order: [['createdAt', 'DESC']],
                    limit,
                    offset
                });
                break;
            default:
                const err = new Error('Invalid user type');
                err.status = 400;
                err.title = 'Invalid user type';
                err.errors = { userType: 'The provided user type is invalid.' };
                return next(err);
        }

        return res.send({ reports: reports.rows, count: reports.count });
    } catch (error) {
        next(error);
    }
});




module.exports = router;
