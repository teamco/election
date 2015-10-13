Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'appBody',

    // the appNotFound template is used for unknown routes and missing lists
    notFoundTemplate: 'appNotFound',

    progress: true,

    // wait on the following subscriptions before rendering the page to ensure
    // the data it's expecting is present
    waitOn: function () {
        return [
            Meteor.subscribe('userData')
            //Meteor.subscribe('adminApp'),
            //Meteor.subscribe('publicApp'),
            //Meteor.subscribe('privateApp')
        ];
    }
});

dataReadyHold = null;

if (Meteor.isClient) {
    // Keep showing the launch screen on mobile devices until we have loaded
    // the app's data
    dataReadyHold = LaunchScreen.hold();
}

Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
        this.render('publicSite');
    } else {
        this.next();
    }
});

Router.route('/', function () {
    this.render('Index');
});

Router.route('/home', function () {
    this.render('Home');
    this.layout(null);
});

Router.route('/users', function () {
    this.render('userData');
    Template.userData.__helpers.get('hideModal')();
});

Router.route('/users/:id', function () {
    this.render('userData');
    Template.userData.__helpers.get('showModal')(this.params.id);
});