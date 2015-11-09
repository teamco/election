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

Template.userLogsData.helpers({
    isError: sharedMethods.isError,
    userLogsCount: function () {
        return UserLog.find().count();
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