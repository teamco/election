Router.route('/contentManagement', function () {
    this.render('contentManagement');
});

Router.route('/contentManagement/partials', function () {
    this.render('createNewBlog');
}, {name: 'createNewBlog.create'});