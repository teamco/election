Meteor.methods({
    updateAccountRoles: function (opts) {
        
        var roles = Roles.getRolesForUser(opts.userId),
            update = _.compact(
                _.map(opts.access, function (access, role) {
                    if (access) {
                        return role;
                    }
                })
            );

        var isAdmin = Roles.getUsersInRole(opts.userId, 'admin'),
            isCurrent = opts.userId === this.userId;

        if (isAdmin) {

            if (update.indexOf('admin') > -1) {

                console.warn(TAPi18n.__('admin_added'));

            } else if (isCurrent) {

                console.warn(TAPi18n.__('admin_skipped'));

                roles = _.reject(roles, function (role) {
                    return role === 'admin';
                });

            } else {

                console.warn(TAPi18n.__('admin_removed'));
            }
        }

        Roles.removeUsersFromRoles(opts.userId, roles);
        Roles.addUsersToRoles(opts.userId, update);
    }
});