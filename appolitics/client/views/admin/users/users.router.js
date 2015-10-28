Router.route('/admin/users', function () {
    this.render('userData');
});

Router.route('/admin/users/:id', function () {
    this.render('editUser');
});