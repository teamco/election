var FacebookStrategy = require('passport-facebook').Strategy,
    models = require('../../models/setup');

module.exports = function (app, passport, config) {

    app.get(
        config.authenticateUrl,
        passport.authenticate('facebook', {
            scope: ['user_status', 'email']
        })
    );

    app.get(config.authenticateUrl + '/callback',
        function (req, res, next) {
            passport.authenticate('facebook', {
                // redirect back to the login page if there is an error
                failureRedirect: '/login',
                // allow flash messages
                failureFlash: true
            }, function (err, user) {

                if (err) return next(err);

                // Redirect if it fails
                if (!user[0]) return res.redirect('/login');

                // Redirect if it succeeds
                return res.redirect('/users/' + user[0].uuid);

            })(req, res, next);
        }
    );

    passport.use(new FacebookStrategy({
            clientID: config.clientID,
            clientSecret: config.clientSecret,
            callbackURL: config.callbackURL,
            enableProof: false,
            profileFields: config.profileFields
        },
        function (accessToken, refreshToken, profile, done) {

            var email = profile.displayName.replace(/ /g, '-').toLowerCase() + '@' + profile.provider + '.com',
                auth = {
                    provider: profile.provider,
                    oauth_token: accessToken,
                    name: profile.displayName,
                    email: (profile.emails[0] || {}).value || email,
                    password: models.User.generateHash(profile.id),
                    image: profile._json.picture.data.url
                };

            models.User.findOrCreate({
                where: {email: auth.email},
                defaults: auth
            }).done(function (user, err) {
                return done(err, user);
            });
        }
    ));

};