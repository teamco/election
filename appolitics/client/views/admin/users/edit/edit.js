Template.editUser.onRendered(function () {
    this.$('.datetimepicker').datetimepicker({
        format: 'MMMM DD, YYYY'
    });
});

Template.editUser.helpers({
    info: function () {
        return {
            _id: function () {
                return getCurrentUser()._id;
            },
            email: function () {
                return getCurrentUser().profile.email;
            },
            provider: function () {
                return getCurrentUser().profile.provider;
            },
            profile: function () {
                return getCurrentUser().profile.link;
            },
            createdAt: function () {
                return getCurrentUser().createdAt;
            }
        };
    },
    status: function () {
        return {
            idle: function () {
                return getCurrentUser().status.idle ? 'Idle' : 'Active';
            },
            online: function () {
                return getCurrentUser().status.online ? 'Online' : 'Offline';
            },
            ipAddress: function () {
                return getCurrentUser().status.lastLogin.ipAddr;
            },
            userAgent: function () {
                return getCurrentUser().status.lastLogin.userAgent;
            },
            lastLogin: function () {
                return getCurrentUser().status.lastLogin.date;
            }
        };
    },
    profile: function () {
        return {
            firstName: function () {
                return getUserProfile().userFirstName || getUserName().split(' ')[0];
            },
            middleName: function () {
                return getUserProfile().userMiddleName;
            },
            lastName: function () {
                return getUserProfile().userLastName || getUserName().split(' ')[1];
            },
            birthday: function () {
                return getUserProfile().userBirthday;
            },
            country: function () {
                return getUserProfile().userCountry;
            },
            address: function () {
                return getUserProfile().userAddress;
            }
        };
    },
    access: function () {

        var roles = getUserRoles();

        return {
            availableRoles: function () {
                return _.map(Roles.getAllRoles().fetch(), function (role) {
                    return {
                        name: role.name,
                        checked: _.contains(roles, role.name)
                    }
                });
            },
            currentRoles: function () {
                return roles.join(', ');
            }
        }
    }
});

function getUserName() {
    return getCurrentUser().profile.name || ' ';
}

function getUserRoles() {
    return Roles.getRolesForUser(getCurrentUser()) || [];
}

function getCurrentUser() {
    return Accounts.users.findOne(Router.current().params.id) ||
        {profile: {}, status: {lastLogin: {}}};
}

function getUserProfile() {
    return (AccountProfile.findOne({userId: getCurrentUser()._id}) || {}).profile || {};
}

Meteor.subscribe("profile");
Meteor.subscribe("roles");