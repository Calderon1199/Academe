const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Parent } = require('../../db/models');

const router = express.Router();

//backend validation for signup
const validateParentSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a first name.')
        .isLength({ min: 2, max: 30 })
        .withMessage('First name must be between 2 and 30 characters.'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a last name.')
        .isLength({ min: 2, max: 50 })
        .withMessage('Last name must be between 2 and 50 characters.'),
    check('phoneNumber')
        .exists({ checkFalsy: true })
        .isNumeric()
        .isLength({ min: 10, max: 10 })
        .withMessage('Please provide a valid phone number.'),
    check('studentRelation')
        .exists({ checkFalsy: true })
        .isAlpha()
        .withMessage('Please provide your relation to the student.')
        .isLength({ min: 3, max: 15 })
        .withMessage('Relation must be between 3 and 15 characters.'),
    check('companyId')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a company ID.'),
    check('schoolId')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a school ID.'),
    handleValidationErrors
];

// Sign up
router.post('/', validateParentSignup, async (req, res) => {

    const { email, password, firstName, lastName, phoneNumber, studentRelation, companyId, schoolId } = req.body;

    const hashedPassword = bcrypt.hashSync(password);
    const parent = await Parent.create({ email, hashedPassword, firstName, lastName, phoneNumber, studentRelation, companyId, schoolId });

    const safeParent = {
        id: parent.id,
        email: parent.email,
        firstName: parent.firstName,
        lastName: parent.lastName
    };

    await setTokenCookie(res, safeParent);

    return res.json({
        parent: safeParent
    });
});

// Restore session admin
router.get('/', (req, res) => {
    const { parent } = req;
    if (parent) {
        const safeParent = {
            id: parent.id,
            email: parent.email,
            firstName: parent.username,
            lastName: parent.lastName
        };
        return res.json({
            parent: safeParent
        });
    } else return res.json({ parent: null });
});


module.exports = router;
