Meteor.publish("userLogs", function () {
    return runAsAdmin(this, UserLog.find());
});