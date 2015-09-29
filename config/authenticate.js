function isAuthenticated(req) {
    return (req.session.passport || {}).user;
}

module.exports = {
    ensureAuthenticated: function (req, res, next) {
        return isAuthenticated(req) ?
            next() : res.redirect(401, '/login');

    },
    ensureAdmin: function (req, res, next) {
        // ensure authenticated user exists with admin role,
        // otherwise send 401 response status
        if (req.user && req.user.role == 'ADMIN') {
            return next();
        } else {
            return res.send(401);
        }
    }
};