Template.userData.events({
    'click a.delete-user': function (event, template) {

        event.preventDefault();
        Template.userData.__helpers.get('confirmBeforeRemove')(this);
    }
});

// This code only runs on the client
Template.userData.helpers({
    isAdminUser: function () {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    },
    allUsers: function () {
        return Accounts.users.find().fetch();
    },
    isCurrentUser: isCurrentUser,
    confirmBeforeRemove: function (user) {
        var name = user.profile.name || user.profile.email;

        BootstrapModalPrompt.prompt({
            title: "Delete user",
            content: 'Do you really want to remove user: ' + name + '?'
        }, function (confirmed) {

            if (confirmed) {

                if (isCurrentUser(user._id)) {
                    Meteor.logout();
                }

                Meteor.call(
                    'destroyUser',
                    user,
                    function (error, result) {
                        console.log(arguments)
                    }
                )
            }
        });
    }
});

function isCurrentUser(_id) {
    return _id === Meteor.userId();
}

Meteor.subscribe("users");