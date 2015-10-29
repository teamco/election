Template.adminDashboard.helpers({
    registeredUsers: function() {
        return Accounts.users.find().count();
    },
    onlineUsers: function() {
        return Accounts.users.find({'status.online': true}).count();
    }
});

Meteor.subscribe("users");
Meteor.subscribe("userStatus");