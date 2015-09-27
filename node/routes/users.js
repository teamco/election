var User = require('../config/models/setup').User;
var router = require('express').Router();

router.get('/:uuid', function (req, res) {
    User.findOne({where: {uuid: req.params.uuid}}).done(
        function (user, err) {
            if (err) throw err;
            res.render('profile', {
                user: user
            });
        }
    );
});

module.exports = router;