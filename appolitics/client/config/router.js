Router.configure({
    notFoundTemplate: 'notFound'
});

var requireLogin = function () {

    function _isRestrictedArea(router) {
        return router.url.match(/setting/);
    }

    if (_isRestrictedArea(this)) {

        this.layout('appoliticsLayout');

        if (isAdmin()) {

            //Bert.alert(TAPi18n.__('restricted_area'), 'info');

        } else {

            //this.render('accessDenied');
            //Bert.alert(TAPi18n.__('restricted_area'), 'danger');
            this.redirect('/');
            this.stop();
            return false;
        }

    } else if (currentUser()) {

        if (inRole('candidate')) {

            this.layout('appoliticsLayout');
            this.render('dashboard');

        } else if (inRole('end-user')) {

            this.layout('endUserLayout');
            this.render('timeline');

        } else {

            this.layout("siteTemplate");
            this.render('login');
        }

    } else {

        this.layout("siteTemplate");
        this.render('login');
    }

    this.next();
};

var updateUserLog = function() {

    Meteor.call(
        'updateUserLog',
        this.url,
        function (error, result) {

            if (throwError(error)) {
                return false;
            }
        }
    );
};

Router.onBeforeAction(requireLogin);
Router.onAfterAction(updateUserLog);

Router.route('/', function () {
});