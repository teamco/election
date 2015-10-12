if (Meteor.isClient) {

    Template.editUser.events({
        'click #editUserModal button[type="submit"]': function (event) {
            event.preventDefault();
        }
    });

    Template.editUser.helpers({
        email: function () {
            return getCurrentUser().profile.email;
        },
        provider: function() {
            return getCurrentUser().profile.provider;
        },
        profile: function() {
            return getCurrentUser().profile.link;
        },
        lastLogin: function() {
            return getCurrentUser().profile.updatedAt;
        },

    });

    function getCurrentUser() {
        return Accounts.users.findOne(Router.current().params.id) || {profile: {}};
    }
}