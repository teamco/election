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
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin);

Router.route('/admin/users', function () {
    this.render('userData');
});

Router.route('/admin/users/:id', function () {
    this.render('userData');
});


