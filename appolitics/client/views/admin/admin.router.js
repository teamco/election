Router.route('/admin', function () {
    this.render('adminDashboard');
});

Router.route('/admin/users', function () {
    this.render('userData');
}, {name: 'admin.users'});

Router.route('/admin/users/:id', function () {
    this.render('editUser');
});