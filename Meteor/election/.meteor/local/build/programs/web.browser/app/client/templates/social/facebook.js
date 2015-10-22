(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/social/facebook.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.Facebook.events({                                             // 1
    'click #facebook-login': function (event) {                        // 2
        Meteor.loginWithFacebook({}, function (err) {                  // 3
            if (err) {                                                 // 4
                throw new Meteor.Error("Facebook login failed");       // 5
            }                                                          //
        });                                                            //
    },                                                                 //
                                                                       //
    'click #logout': function (event) {                                // 10
        Meteor.logout(function (err) {                                 // 11
            if (err) {                                                 // 12
                throw new Meteor.Error("Logout failed");               // 13
            }                                                          //
        });                                                            //
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
