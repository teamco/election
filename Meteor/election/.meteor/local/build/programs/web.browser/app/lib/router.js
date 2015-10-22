(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'appBody',                                         // 3
                                                                       //
    // the appNotFound template is used for unknown routes and missing lists
    notFoundTemplate: 'appNotFound',                                   // 6
                                                                       //
    progress: true,                                                    // 8
                                                                       //
    // wait on the following subscriptions before rendering the page to ensure
    // the data it's expecting is present                              //
    wait: function () {                                                // 12
        return [Meteor.subscribe('userData')                           // 13
        //Meteor.subscribe('adminApp'),                                //
        //Meteor.subscribe('publicApp'),                               //
        //Meteor.subscribe('privateApp')                               //
        ];                                                             //
    }                                                                  //
});                                                                    //
                                                                       //
dataReadyHold = null;                                                  // 22
                                                                       //
if (Meteor.isClient) {                                                 // 24
    // Keep showing the launch screen on mobile devices until we have loaded
    // the app's data                                                  //
    dataReadyHold = LaunchScreen.hold();                               // 27
}                                                                      //
                                                                       //
Router.onBeforeAction(function () {                                    // 30
    if (Meteor.userId() && Router.current().url.match(/admin/)) {      // 31
        this.next();                                                   // 32
    } else {                                                           //
        Router.go('/');                                                // 34
    }                                                                  //
});                                                                    //
                                                                       //
Router.route('/', function () {                                        // 38
    this.render('Home');                                               // 39
    this.layout(null);                                                 // 40
});                                                                    //
                                                                       //
Router.route('/admin/users', function () {                             // 43
    debugger;                                                          // 43
    this.render('userData');                                           // 44
    Template.userData.__helpers.get('hideModal')();                    // 45
});                                                                    //
                                                                       //
Router.route('/admin/users/:id', function () {                         // 48
    this.render('userData');                                           // 49
    Template.userData.__helpers.get('showModal')(this.params.id);      // 50
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
