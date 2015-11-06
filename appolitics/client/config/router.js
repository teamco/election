Router.configure({
    notFoundTemplate: 'notFound'
});

function inRole(role) {
    return Meteor.user() && Roles.userIsInRole(Meteor.userId(), role);
}

var requireLogin = function () {

    function _isRestrictedArea(router) {
        return router.url.match(/admin/);
    }

    if (_isRestrictedArea(this) && !inRole('admin')) {

        this.render('accessDenied');
        Bert.alert(TAPi18n.__('restricted_area'), 'danger');
        this.redirect('/');
        this.stop();

    } else if (Meteor.user()) {

        if (inRole('candidate')) {

            this.layout('appoliticsLayout');
            this.render('dashboard');

        } else if (inRole('end-user')) {

            this.layout('endUserLayout');
            this.render('timeline');

        } else {

            this.layout("siteTemplate");
            this.render('landing');
        }

    } else {

        this.layout("siteTemplate");
        this.render('landing');
    }

    this.next();
};

Router.onBeforeAction(requireLogin);

Router.route('/', function () {
});