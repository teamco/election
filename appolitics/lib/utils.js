inRole = function (role, userId) {

    if (Meteor.isClient) {
        userId = userId || Meteor.userId();
    }

    return currentUser() && Roles.userIsInRole(userId, role);
};

isAdmin = function (userId) {
    return inRole('admin', userId);
};

isCurrentUser = function (userId) {
    if (Meteor.isClient) {
        return userId === Meteor.userId();
    }
};

currentUser = function () {
    return Meteor.isServer ? true : Meteor.user();
};

runAsAdmin = function (doc, filter) {
    if (isAdmin(doc.userId)) {
        return filter;
    }
};

getUser = function (userId) {
    return Accounts.users.findOne(userId || Router.current().params.id) ||
        {profile: {}, status: {lastLogin: {}}};
};

getUserRoles = function (userId) {
    return Roles.getRolesForUser(getUser(userId)) || [];
};

getUserProfile = function (userId) {
    return (AccountProfile.findOne({userId: getUser(userId)._id}) || {}).profile || {};
};

getUserName = function (userId) {
    return getUser(userId).profile.name || ' ';
};

throwError = function(error, reason, details) {
    var meteorError = new Meteor.Error(error, reason, details);

    if (Meteor.isClient) {

        // this error is never used
        // on the client, the return value of a stub is ignored
        return meteorError;

    } else if (Meteor.isServer) {

        throw meteorError;
    }
};