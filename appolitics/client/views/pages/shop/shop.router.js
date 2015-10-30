Router.route('/shop', function () {
    this.render('shop');
});

Router.route('/shop/views/edit/:id', function () {
    this.render('productEdit');
});


Router.route('/shop/views/edit', function () {
    this.render('productEdit');
});
