function _runAsAdmin(ref, filter) {
    if (Roles.userIsInRole(ref.userId, 'admin')) {
        return filter;
    }
}

Meteor.publish("profile", function () {
    return _runAsAdmin(this, AccountProfile.find());
});