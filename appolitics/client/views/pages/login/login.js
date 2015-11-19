Template.login.helpers({
    //add you helpers here
});

Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },

    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});

Template.login.onCreated(function () {
    //add your statement here
});

Template.login.onRendered(function () {
    //add your statement here
});

Template.login.onDestroyed(function () {
    //add your statement here
});

