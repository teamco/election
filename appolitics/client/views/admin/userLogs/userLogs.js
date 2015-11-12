var sharedMethods = {
    logOwnerEmail: function (userId) {
        return getUser(userId).profile.email;
    },
    logId: function () {
        return Router.current().params.logId;
    },
    userLog: function () {
        return UserLog.find(sharedMethods.logId()).fetch()[0];
    },
    isError: function (logId) {
        return ErrorLog.findOne({userLogId: sharedMethods.logId() || logId});
    }
};

Template.userLogsData.onCreated(function () {

    var user = isUserLogs();

    if (user && user._id) {

        UserLogPages.set({
            filters: {
                userId: user._id
            }
        });
    }
});

Template.userLogsData.helpers({
    isError: sharedMethods.isError,
    userLogsCount: function () {
        return runTemplateHelper(Template.userLogs, 'userLogsCount');
    }
});

Template.userLogData.helpers({
    logOwnerEmail: sharedMethods.logOwnerEmail,
    isError: sharedMethods.isError,
    userLog: function () {
        return sharedMethods.userLog();
    },
    acceptLanguage: function () {
        return sharedMethods.userLog().httpHeaders['accept-language'];
    },
    userAgent: function () {
        return sharedMethods.userLog().httpHeaders['user-agent'];
    },
    xForwardedFor: function () {
        return sharedMethods.userLog().httpHeaders['x-forwarded-for'];
    }
});

Template.userLogsDataItem.helpers({
    logOwnerEmail: sharedMethods.logOwnerEmail,
    isError: sharedMethods.isError
});

Meteor.subscribe("users");
Meteor.subscribe("userLogs");
Meteor.subscribe("errorLogs");