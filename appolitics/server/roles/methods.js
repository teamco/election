Meteor.methods({
    updateAccountRoles: function (opts) {

        var roles = Roles.getRolesForUser(opts.userId),
            update = _.map(opts.access, function (access, role) {
                if (access) {
                    return role;
                }
            });

        if (Roles.getUsersInRole(opts.userId, 'admin')) {

            if (update.indexOf('admin') > -1) {

                console.warn(TAPi18n.__('admin_removed'));

            } else {

                roles = _.reject(roles, function (role) {
                    return role === 'admin';
                });
            }
        }

        Roles.removeUsersFromRoles(opts.userId, roles);
        Roles.addUsersToRoles(opts.userId, update);
    }
});