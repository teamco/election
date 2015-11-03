Router.configure({
    layoutTemplate: 'siteLayout',
    notFoundTemplate: 'notFound'
});

var requireLogin = function () {

    function _isRestrictedArea(router) {
        return router.url.match(/admin/);
    }

    function _isAdmin() {
        return Meteor.user() && Roles.userIsInRole(Meteor.userId(), 'admin');
    }

    if (_isRestrictedArea(this) && !_isAdmin()) {

        this.render('accessDenied');
        Bert.alert('Restricted area', 'danger');

    } else if (Meteor.user()) {

        // Redirect to end user page
//        this.redirect('/home');
        //Bert.alert( 'Welcome', 'success', 'growl-top-right' );
        this.next();

    } else {

        // Redirect to public page
        this.next();
    }
};

Router.onBeforeAction(requireLogin);

Router.route('/', function () {

    if (Meteor.user()) {

        this.layout('mainLayout');

    } else {

        this.layout('siteLayout');
    }
});