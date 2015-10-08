Template.LeftMenu.events({

    'click a[name="donate"]': function (event) {
        Router.go('/donate');
    },

    'click img.img-circle': function (event) {
        Router.go('/');
    }

});

Router.route('/donate', function () {

    this.render('Donate');

}, {name: 'donate'});