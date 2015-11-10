Template.usersDashboard.helpers({
    registeredUsers: function () {
        return Accounts.users.find().count();
    },
    onlineUsers: function () {
        return Accounts.users.find({'status.online': true}).count();
    }
});

Template.userLogs.helpers({
    userLogsCount: function () {
        return UserLog.find().count();
    }
});

Template.errorLogs.helpers({
    errorLogsCount: function () {
        return ErrorLog.find().count();
    }
});

Meteor.subscribe("users");
Meteor.subscribe("userStatus");
Meteor.subscribe("userLogs");
Meteor.subscribe("errorLogs");