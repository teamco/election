Meteor.publish("profile", function () {
    return runAsAdmin(this, AccountProfile.find());
});