(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/left-menu/left-menu.js                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.LeftMenu.events({                                             // 1
                                                                       //
    'click a[name="donations"]': function (event) {                    // 3
        Router.go('/donations');                                       // 4
    },                                                                 //
                                                                       //
    'click a[name="dashboard"]': function (event) {                    // 8
        Router.go('/dashboard');                                       // 9
    },                                                                 //
                                                                       //
    'click a[name="calendar"]': function (event) {                     // 12
        Router.go('/calendar');                                        // 13
    },                                                                 //
                                                                       //
    'click a[name="inbox"]': function (event) {                        // 16
        Router.go('/inbox');                                           // 17
    },                                                                 //
                                                                       //
    'click a[name="mail_compose"]': function (event) {                 // 21
        Router.go('/mail_compose');                                    // 22
    },                                                                 //
                                                                       //
    'click img.img-circle': function (event) {                         // 26
        Router.go('/');                                                // 27
    }                                                                  //
                                                                       //
});                                                                    //
                                                                       //
Router.route('/donations', function () {                               // 32
                                                                       //
    this.render('donations');                                          // 34
}, { name: 'donations' });                                             //
                                                                       //
Router.route('/dashboard', function () {                               // 38
                                                                       //
    this.render('dashboard');                                          // 40
}, { name: 'dashboard' });                                             //
                                                                       //
Router.route('/calendar', function () {                                // 44
                                                                       //
    this.render('calendar');                                           // 46
}, { name: 'calendar' });                                              //
                                                                       //
Router.route('/inbox', function () {                                   // 50
                                                                       //
    this.render('inbox');                                              // 52
}, { name: 'inbox' });                                                 //
                                                                       //
Router.route('/mail_compose', function () {                            // 56
                                                                       //
    this.render('mail_compose');                                       // 58
}, { name: 'mail_compose' });                                          //
/////////////////////////////////////////////////////////////////////////

}).call(this);
