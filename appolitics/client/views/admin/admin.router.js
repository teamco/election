Router.route('/setting', function () {
    this.render('settingDashboard');
});

Router.route('/setting/users', function () {
    this.render('userData');
}, {name: 'setting.users'});

Router.route('/setting/users/logs', function () {
    this.render('userLogsData');
}, {name: 'user.logs'});

Router.route('/setting/users/:id/logs', function () {
    this.render('userLogsData');
});

Router.route('/setting/users/:id', function () {
    this.render('editUser');
});