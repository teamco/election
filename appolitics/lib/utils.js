runTemplateHelper = function (template, method) {
    return template.__helpers.get(method).call();
};

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
    return Accounts.users.findOne(userId || Router.current().params.userId) ||
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

isUserLogs = function () {
    return Router.current().url.match(/setting\/users\/(.+)?/) ?
        getUser() : false;
};

is403 = function(id, url) {

    var name = Meteor.isClient ?
        Template.instance().view.name:
        'Meteor.server';

    throwError({
        error: 403,
        errorType: TAPi18n.__('find_error', name),
        reason: name,
        message: TAPi18n.__('find_error', name),
        stack: 'Invalid Id: ' + id
    });

    Router.go(url || '');
};

throwError = function (errorClass) {

    function _call() {

        Meteor.call(
            'createErrorLog', {
                details: errorClass.details,
                error: errorClass.error,
                errorType: errorClass.errorType,
                message: errorClass.message,
                reason: errorClass.reason,
                stack: errorClass.stack
            },
            function (error, result) {

                if (error) {
                    console.error(error);
                }
            }
        );

        return new Meteor.Error(errorClass.error, errorClass.reason, errorClass.details);
    }

    if (Meteor.isClient && errorClass) {

        Bert.alert(errorClass.message, 'danger');
        return _call();
    }

    if (Meteor.isServer && errorClass) throw _call();

    return false;
};