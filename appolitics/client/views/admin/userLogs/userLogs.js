Template.userLogsData.helpers({
    userLogsCount: function () {
        return UserLog.find().count();
    }
});

Template.userLogsDataItem.helpers({
    logOwnerEmail: function(userId) {
        return getUser(userId).profile.email;
    }
});