Router.route('/shopManagment', function () {
    this.render('shopManagment');
});

Router.route('/shopManagment/views/edit/:id', function () {
    this.render('productEdit');
});


Router.route('/shopManagment/views/edit', function () {
    this.render('productEdit');
});
