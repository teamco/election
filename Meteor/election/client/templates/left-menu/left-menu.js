Template.LeftMenu.events({
    'click a[name="donate"]': function (event) {
        Router.go('/donate');
    }
});

Router.route('/donate', function () {

    this.render('Donate');

}, {name: 'donate'});