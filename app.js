var express = require('express');
var uuid = require('node-uuid');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var oauth = require('./config/oauth');

var port = process.env.PORT || 8080;

var app = express();

var passport = require('passport');

var auth = {
    name: 'Apolitics',
    secret: 'd75ea36b070d78663a9f82f9170f78c0901b942788b46e0976f9d49b7405723e78af190abc4bb14cc1edada13cb60deb0d11898cb18dc8a55ccb10f76e01ad75',
    cookie: {}
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//if (app.get('env') === 'development') {
    app.use(logger('dev'));
//}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    auth.cookie.secure = true; // serve secure cookies
}

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(auth.secret));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(
    session({
        name: auth.name,
        proxy: true,
        resave: true,
        saveUninitialized: true,
        genid: uuid.v4,
        secret: auth.secret
    })
);
app.use(flash());

for (var index in oauth)
    if (oauth.hasOwnProperty(index)) {
        var config = require('./config/oauth/' + index);
        config(app, passport, oauth[index]);
    }

// load our routes and pass in our app and fully configured passport
require('./routes/auth')(app, passport);
require('./config/passport')(passport);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});

module.exports = app;