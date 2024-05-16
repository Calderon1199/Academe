const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Admin, Company } = require('../../db/models');

const router = express.Router();

//backend validation for signup
const validateAdminSignup = [
    check('email')
        .exists({ checkFalsy: true }).withMessage('Please provide an email')
        .isEmail().withMessage('Please provide a valid email.')
        .notEmpty().withMessage('Please provide an email.')
        .custom(async email => {
            const existingEmail = await Admin.findByEmail(email)
            if (existingEmail) {
                throw new Error('Email already exists.')
            }
        }),
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a first name.')
        .isAlpha().withMessage('Must only contain letters.')
        .notEmpty().withMessage('Please provide a name.')
        .isLength({ min: 2, max: 30 })
        .withMessage('First name must be between 2 and 30 characters.'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a last name.')
        .isAlpha().withMessage('Must only contain letters.')
        .notEmpty().withMessage('Please provide a name.')
        .isLength({ min: 2, max: 50})
        .withMessage('Last name must be between 2 and 50 characters.'),
    check('phoneNumber')
        .exists({ checkFalsy: true }).withMessage('Please provide a phone number.')
        .isLength({ min: 13, max: 13 }).withMessage('Phone number must be 10 digits long.')
        .notEmpty().withMessage('Please provide a phone number.')
        .custom((value) => {
            if (!/^[0-9()-]+$/.test(value)) {
                throw new Error('Phone number format: (***) ***-****');
            }
            return true;
        }).withMessage('Phone number format: (***) ***-****'),
    check('companyId')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a company ID.')
        .custom(async (companyId) => {
            const existingCompany = await Company.findByPk(+companyId);
            if (!existingCompany) {
                throw new Error('Company ID does not exist.');
            }
        }),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

// Sign up
router.post('/', validateAdminSignup, async (req, res) => {

    const { email, password, firstName, lastName, phoneNumber, companyId } = req.body;

    const hashedPassword = bcrypt.hashSync(password);
    const admin = await Admin.create({ email, hashedPassword, firstName, lastName, phoneNumber, companyId });

    const safeAdmin = {
        id: admin.id,
        email: admin.email,
        firstName: admin.firstName,
        lastName: admin.lastName
    };

    await setTokenCookie(res, safeAdmin);

    return res.json({
        admin: safeAdmin
    });
});

// Restore session admin
router.get('/', (req, res) => {
    const { admin } = req;
    if (admin) {
        const safeAdmin = {
            id: admin.id,
            email: admin.email,
            firstName: admin.username,
            lastName: admin.lastName
        };
        return res.json({
            admin: safeAdmin
        });
    } else return res.json({ admin: null });
});


module.exports = router;
