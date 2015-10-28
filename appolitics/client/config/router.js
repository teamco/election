Router.configure({
    layoutTemplate: 'mainLayout',
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

    } else if (Meteor.user()) {

        // Redirect to end user page
        this.next();

    } else {

        // Redirect to public page
        this.next();
    }
};

Router.onBeforeAction(requireLogin);