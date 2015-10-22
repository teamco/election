(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/login/login-page.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.CustomLogin.events({                                          // 1
    'click #login-buttons-edit-profile': function (event) {            // 2
        Router.go('profileEdit');                                      // 3
    }                                                                  //
});                                                                    //
                                                                       //
//accountsUIBootstrap3.logoutCallback = function (error) {             //
//    if (error) console.log("Error:" + error);                        //
//    if (Meteor.isClient) {                                           //
//        var _logout = Meteor.logout;                                 //
//        Meteor.logout = function customLogout() {                    //
//            // Do your thing here                                    //
//            _logout.apply(Meteor, arguments);                        //
//        }                                                            //
//    }                                                                //
//}                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
