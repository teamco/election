(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/config/router.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
    layoutTemplate: 'mainLayout',                                      // 2
    notFoundTemplate: 'notFound'                                       // 3
});                                                                    //
                                                                       //
//Router.onBeforeAction(function () {                                  //
//if (Meteor.userId() && Router.current().url.match(/admin/)) {        //
//    this.next();                                                     //
//} else {                                                             //
//    Router.go('/');                                                  //
//}                                                                    //
//});                                                                  //
                                                                       //
Router.route('/admin/users', function () {                             // 14
    this.render('userData');                                           // 15
});                                                                    //
                                                                       //
Router.route('/admin/users/:id', function () {                         // 18
    this.render('userData');                                           // 19
});                                                                    //
                                                                       //
Router.route('/pageOne', function () {                                 // 22
    this.render('pageOne');                                            // 23
});                                                                    //
                                                                       //
Router.route('/', function () {                                        // 26
    Router.go('pageOne');                                              // 27
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
