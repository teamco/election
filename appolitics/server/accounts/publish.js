Meteor.publish("users", function () {
    return runAsAdmin(this, Meteor.users.find());
});

Meteor.publish("userStatus", function () {
    return runAsAdmin(this, Meteor.users.find({'status.online': true}));
});

Meteor.publish('roles', function () {
    return runAsAdmin(this, Meteor.roles.find());
});