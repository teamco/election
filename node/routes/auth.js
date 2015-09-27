module.exports = function (app, passport) {

    app.use('/users', require('./users'));

    // Initialize Passport!  Also use passport.session() middleware, to support
    // persistent login sessions (recommended).
    app.use(passport.initialize());
    app.use(passport.session());

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        res.render('index');
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function (req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login', {message: req.flash('loginMessage')});
    });

    // app.post('/login', do all our passport stuff here);
    // process the login form
    app.post('/login',
        function (req, res, next) {
            passport.authenticate('local-login', {
                // redirect back to the login page if there is an error
                failureRedirect: '/login',
                // allow flash messages
                failureFlash: true
            }, function (err, user) {

                if (err) return next(err);

                // Redirect if it fails
                if (!user) return res.redirect('/login');

                req.logIn(user, function (err) {

                    if (err) return next(err);

                    // Redirect if it succeeds
                    return res.redirect('/users/' + user.uuid);
                });

            })(req, res, next);
        }
    );

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup', {message: req.flash('signupMessage')});
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};