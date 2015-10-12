Template.LeftMenu.events({

    'click a[name="donations"]': function (event) {
        Router.go('/donations');
    },


    'click a[name="dashboard"]': function (event) {
        Router.go('/dashboard');
    },

    'click a[name="calendar"]': function (event) {
           Router.go('/calendar');
       },

    'click a[name="inbox"]': function (event) {
            Router.go('/inbox');

        },

    'click a[name="mail_compose"]': function (event) {
          Router.go('/mail_compose');
    },


    'click img.img-circle': function (event) {
        Router.go('/');
    }

});

Router.route('/donations', function () {

    this.render('donations');

}, {name: 'donations'});

Router.route('/dashboard', function () {

    this.render('dashboard');

}, {name: 'dashboard'});

Router.route('/calendar', function () {

    this.render('calendar');

}, {name: 'calendar'});

Router.route('/inbox', function () {

    this.render('inbox');

}, {name: 'inbox'});

Router.route('/mail_compose', function () {

    this.render('mail_compose');

}, {name: 'mail_compose'});