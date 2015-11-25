Router.route('/shopManagement', function () {
    this.render('shopManagement');
});

Router.route('/shopManagement/views/edit/:id', function () {
    this.render('productEdit');
});


Router.route('/shopManagement/views/edit', function () {
    this.render('productEdit');
});
