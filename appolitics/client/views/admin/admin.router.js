Router.route('/setting', function () {
    this.render('adminDashboard');
});

Router.route('/setting/users', function () {
    this.render('userData');
}, {name: 'setting.users'});

Router.route('/setting/logs', function () {
    this.render('userLogsData');
}, {name: 'user.logs'});

Router.route('/setting/logs/:logId', function () {
    this.render('userLogData');
});

Router.route('/setting/users/:id/logs', function () {
    this.render('userLogsData');
});

Router.route('/setting/users/:id/logs/:logId', function () {
    this.render('userLogData');
});

Router.route('/setting/errors', function () {
    this.render('errorLogsData');
}, {name: 'error.logs'});

Router.route('/setting/errors/:errorId', function () {
    this.render('errorLogData');
});

Router.route('/setting/users/:id/errors', function () {
    this.render('errorLogsData');
});

Router.route('/setting/users/:id/errors/:errorId', function () {
    this.render('errorLogData');
});

Router.route('/setting/users/:id', function () {
    this.render('editUser');
});