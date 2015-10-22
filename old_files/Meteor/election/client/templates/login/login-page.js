Template.CustomLogin.events({
    'click #login-buttons-edit-profile': function (event) {
        Router.go('profileEdit');
    }
});


//accountsUIBootstrap3.logoutCallback = function (error) {
//    if (error) console.log("Error:" + error);
//    if (Meteor.isClient) {
//        var _logout = Meteor.logout;
//        Meteor.logout = function customLogout() {
//            // Do your thing here
//            _logout.apply(Meteor, arguments);
//        }
//    }
//}