const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Admin, Parent, Company } = require('../../db/models');

const router = express.Router();

// backend validation for login
const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid email or username.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors
];

// Log in
router.post('/', validateLogin, async (req, res, next) => {
    const { credential, password, userType } = req.body;

    let user;

    switch (userType) {
        case 'company':
            user = await Company.unscoped().findOne({
                where: { email: credential }
            });
            break;
        case 'admin':
            user = await Admin.unscoped().findOne({
                where: { email: credential }
            });
            break;
        case 'parent':
            user = await Parent.unscoped().findOne({
                where: { email: credential }
            });
            break;
        default:
            const err = new Error('Invalid user type');
            err.status = 400;
            err.title = 'Invalid user type';
            err.errors = { userType: 'The provided user type is invalid.' };
            return next(err);
    }

    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = { credential: 'The provided credentials were invalid.' };
        return next(err);
    }

    const safeUser = {
        id: user.id,
        email: user.email,
        userType,
        ...(userType === 'company' ? { companyName: user.name } : {
            firstName: user.firstName,
            lastName: user.lastName
        })
    };

    await setTokenCookie(res, safeUser);
    res.cookie('userType', userType, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 7 * 24 * 60 * 60 * 1000 });
    return res.json({ user: safeUser });
});

// Log out
router.delete('/', (_req, res) => {
    res.clearCookie('token');
    res.clearCookie('userType');
    return res.json({ message: 'success' });
});

// Use restoreUser middleware to check for the user on every request
router.use(restoreUser);

module.exports = router;
