Router.route('/admin/users', function () {
    this.render('usersDashboard');
});

Router.route('/admin/users/:id', function () {
    this.render('editUser');
});