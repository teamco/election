if (Meteor.isClient) {

    Template.userData.events({
        "click button[rel='editUser']": function (event, template) {
            var nextUrl = '/users/' + this._id,
                currentUrl = Router.current().originalUrl;

            if (currentUrl.indexOf(nextUrl) > -1) {
                return template.view.template.__helpers.get('showModal')(this._id);
            }

            Router.go(nextUrl);
        }
    });

    // This code only runs on the client
    Template.userData.helpers({
        showModal: function (id) {
            if (id) {
                Meteor.defer(function () {
                    $('#editUserModal').modal();
                });
            }
        },
        hideModal: function () {
            Meteor.defer(function () {
                $('#editUserModal').modal("hide");
            });
        },
        allUsers: function () {
            return Accounts.users.find().fetch();
        },
        isCurrentUser: isCurrentUser,
        beforeRemove: function () {
            return function (collection, _id) {
                var user = collection.findOne(_id),
                    name = user.profile.name || user.profile.email,
                    scope = this;

                BootstrapModalPrompt.prompt({
                    title: "Delete user",
                    content: 'Do you really want to remove user: ' + name + '?'
                }, function (confirmed) {
                    if (confirmed) {
                        scope.remove();
                        if (isCurrentUser(_id)) {
                            Meteor.logout();
                        }
                    }
                });
            };
        }
    });
}

function isCurrentUser(_id) {
    return _id === Meteor.userId();
}

Meteor.subscribe("allUsers");
