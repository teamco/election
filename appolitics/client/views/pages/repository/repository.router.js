Router.route('/repository', function () {
    this.render('repository');
});

Router.route('/repository/new', function () {
    this.render('uploadFile');
});
