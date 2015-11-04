function _runAsAdmin(ref, filter) {
    if (Roles.userIsInRole(ref.userId, 'admin')) {
        return filter;
    }
}

Meteor.publish("users", function () {
    return _runAsAdmin(this, Meteor.users.find());
});

Meteor.publish("userStatus", function () {
    return _runAsAdmin(this, Meteor.users.find({'status.online': true}));
});

Meteor.publish('roles', function () {
    return _runAsAdmin(this, Meteor.roles.find());
});