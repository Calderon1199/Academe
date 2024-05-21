const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Parent, Company, School } = require('../../db/models');

const router = express.Router();

//backend validation for signup
const validateParentSignup = [
    check('email')
        .exists({ checkFalsy: true }).withMessage('Please provide an email')
        .isEmail().withMessage('Please provide a valid email.')
        .notEmpty().withMessage('Please provide an email.')
        .custom(async email => {
            const existingEmail = await Parent.findByEmail(email)
            if (existingEmail) {
                throw new Error('Email already exists.')
            }
        }),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
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
        .isLength({ min: 2, max: 50 })
        .withMessage('Last name must be between 2 and 50 characters.'),
    check('phoneNumber')
        .exists({ checkFalsy: true }).withMessage('Please provide a phone number.')
        .isLength({ min: 14, max: 14 }).withMessage('Phone number must be 14 characters long.')
        .matches(/^\(\d{3}\) \d{3}-\d{4}$/).withMessage('Phone number format: (***) ***-****'),
    check('studentRelation')
        .exists({ checkFalsy: true }).withMessage('Please provide relation.')
        .isAlpha().withMessage('Must only contain letters.')
        .withMessage('Please provide relation.')
        .isLength({ min: 3, max: 15 })
        .withMessage('Relation must be between 3 and 15 characters.'),
    check('companyId')
        .optional()
        .custom(async (companyId) => {
            if (companyId) {
                const existingCompany = await Company.findByPk(+companyId);
                if (!existingCompany) {
                    throw new Error('Company ID does not exist.');
                }
            }
        }),
    check('schoolId')
        .optional()
        .custom(async (schoolId) => {
            if (schoolId) {
                const existingSchool = await School.findByPk(+schoolId);
                if (!existingSchool) {
                    throw new Error('School ID does not exist.');
                }
            }
        }),
    handleValidationErrors
];

// Sign up
router.post('/', validateParentSignup, async (req, res) => {

    const { email, password, firstName, lastName, phoneNumber, studentRelation, companyId, schoolId } = req.body;
    const authorized = req.body.authorized || false;
    const hashedPassword = bcrypt.hashSync(password);
    const parent = await Parent.create({ email, hashedPassword, firstName, lastName, phoneNumber, studentRelation, companyId, schoolId, authorized });

    const safeParent = {
        id: parent.id,
        email: parent.email,
        firstName: parent.firstName,
        lastName: parent.lastName,
        authorized: parent.authorized
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
            lastName: parent.lastName,
            authorized: parent.authorized
        };
        return res.json({
            parent: safeParent
        });
    } else return res.json({ parent: null });
});


module.exports = router;
