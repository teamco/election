// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var models = require('./models/setup');

// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.uuid);
    });

    // used to deserialize the user
    passport.deserializeUser(function (uuid, done) {
        models.User.findOne({where: {uuid: uuid}}).done(
            function (err, user) {
                done(err, user);
            }
        );
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function (req, email, password, done) { // callback with email and password from our form

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                models.User.findOne({where: {'email': email}}).done(
                    function (user, err) {

                        // if there are any errors, return the error before anything else
                        if (err) return done(err);

                        // if no user is found, return the message
                        // req.flash is the way to set flashdata using connect-flash
                        if (!user) return done(
                            null,
                            false,
                            req.flash('loginMessage', 'No user found.')
                        );

                        // if the user is found but the password is wrong
                        // create the loginMessage and save it to session as flashdata
                        if (!user.validPassword(password)) return done(
                            null,
                            false,
                            req.flash('loginMessage', 'Oops! Wrong password.')
                        );

                        // all is well, return successful user
                        return done(null, user);
                    }
                );
            }
        )
    );

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-signup',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function (req, email, password, done) {

                // asynchronous
                // User.findOne wont fire unless data is sent back
                process.nextTick(function () {

                    var User = models.User;

                    // find a user whose email is the same as the forms email
                    // we are checking to see if the user trying to login already exists
                    User.findOne({where: {email: email}}).done(
                        function (user, err) {

                            // if there are any errors, return the error
                            if (err) return done(err);

                            // check to see if theres already a user with that email
                            if (user) return done(
                                null,
                                false,
                                req.flash('signupMessage', 'That email is already taken.')
                            );

                            // if there is no user with that email
                            // create the user
                            User.create({
                                email: email,
                                encrypted_password: User.generateHash(password)
                            }).done(
                                function (user, err) {
                                    if (err) return done(err);
                                    return done(null, user);
                                }
                            );
                        }
                    );
                });
            }
        )
    );
};