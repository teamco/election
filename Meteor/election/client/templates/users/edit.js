if (Meteor.isClient) {

    Template.editUser.events({
        'click #editUserModal button[type="submit"]': function (event, template) {
            event.preventDefault();
        }
    });

    Template.editUser.onRendered(function() {
        this.$('.datetimepicker').datetimepicker({
            format: 'MMMM DD, YYYY'
        });
    });

    Template.editUser.helpers({
        email: function () {
            return getCurrentUser().profile.email;
        },
        provider: function () {
            return getCurrentUser().profile.provider;
        },
        profile: function () {
            return getCurrentUser().profile.link;
        },
        lastLogin: function () {
            return getCurrentUser().profile.updatedAt;
        },
        firstName: function () {
            return getUserProfile().firstName || getUserName().split(' ')[0];
        },
        middleName: function () {
            return getUserProfile().middleName;
        },
        lastName: function () {
            return getUserProfile().lastName || getUserName().split(' ')[1];
        },
        birthday: function () {
            return getUserProfile().birthday;
        },
        address: function () {
            return getUserProfile().address;
        }
    });

    function getUserName() {
        return getCurrentUser().profile.name || ' ';
    }

    function getCurrentUser() {
        return Accounts.users.findOne(Router.current().params.id) || {profile: {}};
    }

    function getUserProfile() {
        return AccountProfile.findOne({user_id: getCurrentUser()._id}) || {};
    }
}