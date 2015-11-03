Router.configure({
    notFoundTemplate: 'notFound'
});

function inRole(role) {
    return Meteor.user() && Roles.userIsInRole(Meteor.userId(), role)
}

var requireLogin = function () {

    function _isRestrictedArea(router) {
        return router.url.match(/admin/);
    }

    if (_isRestrictedArea(this) && !inRole('admin')) {

        this.render('accessDenied');
        Bert.alert('Restricted area', 'danger');

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

    //if (Meteor.user()) {
    //
    //    if (inRole('candidate')) {
    //        this.layout('appoliticsLayout');
    //        this.render('dashboard');
    //    } else if (inRole('end-user')) {
    //        this.layout('endUserLayout');
    //        this.render('timeline');
    //    } else {
    //        this.layout("appoliticsLayout");
    //        this.render('landing');
    //    }
    //
    //} else {
    //
    //    this.layout("appoliticsLayout");
    //    this.render('landing');
    //}
});

/*
 Router.route('/:id', function () {

 if (Meteor.user()) {

 this.layout('endUserLayout' + this.params.id);

 } else {

 this.layout('mainLayout');
 }
 });*/
