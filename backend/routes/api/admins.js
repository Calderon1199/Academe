const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Admin } = require('../../db/models');

const router = express.Router();

//backend validation for signup
const validateAdminSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a first name.'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a last name.'),
    check('phoneNumber')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid phone number.'),
    check('companyId')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a company ID.'),
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
