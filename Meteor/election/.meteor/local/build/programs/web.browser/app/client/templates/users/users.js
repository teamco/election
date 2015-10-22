(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/users/users.js                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.userData.events({                                             // 1
    "click button[rel='editUser']": function (event, template) {       // 2
                                                                       //
        event.preventDefault();                                        // 4
                                                                       //
        var nextUrl = '/users/' + this._id,                            // 6
            currentUrl = Router.current().originalUrl;                 //
                                                                       //
        if (currentUrl.indexOf(nextUrl) > -1) {                        // 9
            return Template.userData.__helpers.get('showModal')(this._id);
        }                                                              //
                                                                       //
        Router.go(nextUrl);                                            // 13
    }                                                                  //
});                                                                    //
                                                                       //
// This code only runs on the client                                   //
Template.userData.helpers({                                            // 18
    showModal: function (id) {                                         // 19
        if (id) {                                                      // 20
            Meteor.defer(function () {                                 // 21
                $('#editUserModal').modal();                           // 22
            });                                                        //
        }                                                              //
    },                                                                 //
    hideModal: function () {                                           // 26
        Meteor.defer(function () {                                     // 27
            $('#editUserModal').modal("hide");                         // 28
        });                                                            //
    },                                                                 //
    allUsers: function () {                                            // 31
        return Accounts.users.find().fetch();                          // 32
    },                                                                 //
    isCurrentUser: isCurrentUser,                                      // 34
    beforeRemove: function () {                                        // 35
        return function (collection, _id) {                            // 36
            var user = collection.findOne(_id),                        // 37
                name = user.profile.name || user.profile.email,        //
                scope = this;                                          //
                                                                       //
            BootstrapModalPrompt.prompt({                              // 41
                title: "Delete user",                                  // 42
                content: 'Do you really want to remove user: ' + name + '?'
            }, function (confirmed) {                                  //
                if (confirmed) {                                       // 45
                    scope.remove();                                    // 46
                    if (isCurrentUser(_id)) {                          // 47
                        Meteor.logout();                               // 48
                    }                                                  //
                }                                                      //
            });                                                        //
        };                                                             //
    }                                                                  //
});                                                                    //
                                                                       //
function isCurrentUser(_id) {                                          // 56
    return _id === Meteor.userId();                                    // 57
}                                                                      //
                                                                       //
Meteor.subscribe("allUsers");                                          // 60
/////////////////////////////////////////////////////////////////////////

}).call(this);
