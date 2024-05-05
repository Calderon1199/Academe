const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Company } = require('../../db/models');

const router = express.Router();

//backend validation for signup
const validateCompanySignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.')
        .custom(async email => {
            const existingEmail = await Company.findByEmail(email)
            if (existingEmail) {
                throw new Error('Email already exists.')
            }
        }),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your business name.')
        .isLength({ min: 2, max: 30 })
        .withMessage('Name must be between 2 and 30 characters.')
        .custom((value) => {
            if (!/^[a-zA-Z0-9\s]*$/.test(value)) {
                throw new Error('Name can only contain letters, numbers, and spaces.');
            }
            return true;
        }),
    check('phoneNumber')
        .exists({ checkFalsy: true }).withMessage('Please provide a phone number.')
        .isNumeric().withMessage('Phone number must contain only numbers.')
        .isLength({ min: 10, max: 10 }).withMessage('Phone number must be 10 digits long.')
        .custom((value) => {
            if (!/^[0-9()-]+$/.test(value)) {
                throw new Error('Phone number format: (***) ***-****');
            }
            return true;
        }).withMessage('Phone number format: (***) ***-****'),
    check('address')
        .exists({ checkFalsy: true }).withMessage('Please provide a valid address')
        .isLength({ min: 5, max: 100 }).withMessage('Address must be between 5 and 100 charcters')
        .custom((value) => {
            if (!/^[a-zA-Z0-9\s]*$/.test(value)) {
                throw new Error('Address format is incorrect');
            }
            return true;
        })
        .withMessage('Please provide a valid address.'),
    check('state')
        .exists({ checkFalsy: true }).withMessage('Please provide a state.')
        .isAlpha().withMessage('State may only include letters.')
        .isLength({ min: 2, max: 2 }).withMessage('State should be abbreviated.')
        .isUppercase().withMessage('State must be uppercase.'),
    check('zipcode')
        .exists({ checkFalsy: true }).withMessage('Please provide a zipcode.')
        .isInt().withMessage('Zipcode may only include integers.'),
    handleValidationErrors
];

// Sign up
router.post('/', validateCompanySignup, async (req, res) => {
    const { email, password, name, phoneNumber, address, state, zipcode } = req.body;

    try {
        const hashedPassword = bcrypt.hashSync(password);
        const company = await Company.create({ email, hashedPassword, name, phoneNumber, address, state, zipcode });

        const safeCompany = {
            id: company.id,
            email: company.email,
            name: company.name,
            phoneNumber: company.phoneNumber,
            address: company.address,
            state: company.state,
            zipcode: company.zipcode,
        };

        await setTokenCookie(res, safeCompany);

        return res.json({
            businessAdmin: safeCompany
        });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Restore session admin
router.get('/', (req, res) => {
    const { businessAdmin } = req;
    if (businessAdmin) {
        const safeCompany = {
            id: businessAdmin.id,
            email: businessAdmin.email,
            name: businessAdmin.username,
            phoneNumber: businessAdmin.phoneNumber,
            address: businessAdmin.address,
            state: businessAdmin.state,
            zipcode: businessAdmin.zipcode
        };
        return res.json({
            businessAdmin: safeCompany
        });
    } else return res.json({ businessAdmin: null });
});


module.exports = router;
