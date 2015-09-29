var User = require('../config/models/setup').User,
    router = require('express').Router(),
    authenticate = require('../config/authenticate');

module.exports = function () {

    return router.get('/:uuid', authenticate.ensureAuthenticated, function (req, res) {

        User.findOne({where: {uuid: req.params.uuid}}).done(
            function (user, err) {
                if (err) throw err;
                res.render('profile', {
                    user: user
                });
            }
        );
    });
};