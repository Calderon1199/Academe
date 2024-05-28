const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { Admin, Parent, Company } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// Sends a JWT Cookie
const setTokenCookie = (res, user) => {
    const safeUser = {
        id: user.id,
        email: user.email,
        userType: user.userType // Ensure userType is included
    };
    const token = jwt.sign(
        { data: safeUser },
        secret,
        { expiresIn: parseInt(expiresIn, 10) }
    );

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie('token', token, {
        maxAge: expiresIn * 1000,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "Lax" : "Strict"
    });

    return token;
};


const restoreUser = (req, res, next) => {
    const { token, userType } = req.cookies; // Include userType from cookies
    req.user = null;

    if (!token) {
        console.log('Token not found in cookies');
        return next();
    }

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
            console.log('JWT verification error:', err);
            res.clearCookie('token');
            res.clearCookie('userType'); // Clear userType cookie as well
            return next();
        }

        try {
            const { id } = jwtPayload.data;

            switch (userType) {
                case 'company':
                    req.user = await Company.findByPk(id, {
                        attributes: { include: ['email', 'createdAt', 'updatedAt'] }
                    });
                    break;
                case 'admin':
                    req.user = await Admin.findByPk(id, {
                        attributes: { include: ['email', 'createdAt', 'updatedAt'] }
                    });
                    break;
                case 'parent':
                    req.user = await Parent.findByPk(id, {
                        attributes: { include: ['email', 'createdAt', 'updatedAt'] }
                    });
                    break;
                default:
                    res.clearCookie('token');
                    res.clearCookie('userType'); // Clear userType cookie as well
                    return next();
            }

            if (req.user) {
                req.user.userType = userType; // Attach userType to req.user
            }
        } catch (e) {
            console.log('Error fetching user:', e);
            res.clearCookie('token');
            res.clearCookie('userType'); // Clear userType cookie as well
            return next();
        }

        if (!req.user) {
            res.clearCookie('token');
            res.clearCookie('userType'); // Clear userType cookie as well
        }


        return next();
    });
};

// If there is no current user, return an error
const requireAuth = function (req, _res, next) {
    if (req.user) return next();

    const err = new Error('Authentication required');
    err.title = 'Authentication required';
    err.errors = { message: 'Authentication required' };
    err.status = 401;
    return next(err);
}

module.exports = { setTokenCookie, restoreUser, requireAuth };
