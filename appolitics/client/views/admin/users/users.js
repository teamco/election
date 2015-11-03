function isCurrentUser(_id) {
    return _id === Meteor.userId();
}

Template.userData.events({
    'click a.delete-user': function (event, template) {

        event.preventDefault();

        var user = this,
            name = user.profile.name || user.profile.email;

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
                );
            }
        });

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
    labelClass: function (_id) {
        var status = Accounts.users.findOne(_id).status;
        if (status.idle) return "label-warning";
        else if (status.online) return "label-success";
        else return "label-default";
    },
    isCurrentUser: isCurrentUser
});

Meteor.subscribe("users");