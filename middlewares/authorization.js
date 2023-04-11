const jwt = require('jsonwebtoken');

const { User } = require('../models/user')

const { HttpBaseError } = require('../helpers');

const { SECRET_KEY } = process.env;

const authorization = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return next(HttpBaseError(401));
    }

    const [bearer, token] = authorization?.split(" ");

    if (!bearer || !token || bearer !== 'Bearer') {
        return next(HttpBaseError(401));
    }

    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !user.token || user.token !== token) {
            return next(HttpBaseError(401));
        }

        req.user = user;
        return next();
    } catch {
        return next(HttpBaseError(401));
    }
}

module.exports = authorization;