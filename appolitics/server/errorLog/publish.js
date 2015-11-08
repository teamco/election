Meteor.publish("errorLogs", function () {
    return runAsAdmin(this, ErrorLog.find());
});