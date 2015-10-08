Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'appBody',

    // the appNotFound template is used for unknown routes and missing lists
    //notFoundTemplate: 'appNotFound',

    // show the appLoading template whilst the subscriptions below load their data
    //loadingTemplate: 'appLoading',

    progress : true,

    // wait on the following subscriptions before rendering the page to ensure
    // the data it's expecting is present
    waitOn: function () {
        return [
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

    // Show the loading screen on desktop
    Router.onBeforeAction('loading', {except: ['join', 'signin']});
    Router.onBeforeAction('dataNotFound', {except: ['join', 'signin']});
}

Router.route('/', function () {
    this.render('Index');
});