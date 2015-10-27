Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'
});

//Router.onBeforeAction(function () {
    //if (Meteor.userId() && Router.current().url.match(/admin/)) {
    //    this.next();
    //} else {
    //    Router.go('/');
    //}
//});

Router.route('/pageOne', function () {
    this.render('pageOne');
});

Router.route('/pageTwo', function () {
    this.render('pageTwo');
});

Router.route('/', function () {
    Router.go('pageOne');
});

