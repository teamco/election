(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/users/edit.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.editUser.events({                                             // 1
    'click #editUserModal button[rel="submit"]': function (event, template) {
        closeEditProfile(event);                                       // 3
    }                                                                  //
});                                                                    //
                                                                       //
Template.editUser.events({                                             // 7
    'click #editUserModal button[rel="cancel"]': function (event, template) {
        closeEditProfile(event);                                       // 9
    }                                                                  //
});                                                                    //
                                                                       //
Template.editUser.onRendered(function () {                             // 13
    this.$('.datetimepicker').datetimepicker({                         // 14
        format: 'MMMM DD, YYYY'                                        // 15
    });                                                                //
});                                                                    //
                                                                       //
Template.editUser.helpers({                                            // 19
    email: function () {                                               // 20
        return getCurrentUser().profile.email;                         // 21
    },                                                                 //
    provider: function () {                                            // 23
        return getCurrentUser().profile.provider;                      // 24
    },                                                                 //
    profile: function () {                                             // 26
        return getCurrentUser().profile.link;                          // 27
    },                                                                 //
    lastLogin: function () {                                           // 29
        return getCurrentUser().profile.updatedAt;                     // 30
    },                                                                 //
    firstName: function () {                                           // 32
        return getUserProfile().firstName || getUserName().split(' ')[0];
    },                                                                 //
    middleName: function () {                                          // 35
        return getUserProfile().middleName;                            // 36
    },                                                                 //
    lastName: function () {                                            // 38
        return getUserProfile().lastName || getUserName().split(' ')[1];
    },                                                                 //
    birthday: function () {                                            // 41
        return getUserProfile().birthday;                              // 42
    },                                                                 //
    address: function () {                                             // 44
        return getUserProfile().address;                               // 45
    }                                                                  //
});                                                                    //
                                                                       //
function getUserName() {                                               // 49
    return getCurrentUser().profile.name || ' ';                       // 50
}                                                                      //
                                                                       //
function getCurrentUser() {                                            // 53
    return Accounts.users.findOne(Router.current().params.id) || { profile: {} };
}                                                                      //
                                                                       //
function getUserProfile() {                                            // 57
    return AccountProfile.findOne({ user_id: getCurrentUser()._id }) || {};
}                                                                      //
                                                                       //
function closeEditProfile(event) {                                     // 61
    event.preventDefault();                                            // 62
    Template.userData.__helpers.get('hideModal')();                    // 63
    Router.go('/users');                                               // 64
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
