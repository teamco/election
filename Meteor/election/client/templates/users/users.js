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
        allUsers: function () {
            return Accounts.users.find().fetch();
        },
        isCurrentUser: isCurrentUser,
        onError: function () {
            return function (error) {
                Meteor.call('notify', 'serverMessage:error', 'Error', error, {
                    timeout: 1000
                });
            };
        },
        onSuccess: function () {
            return function (result) {
                Meteor.call('notify', 'serverMessage:success', 'Success', result, {
                    timeout: 1000
                });
            };
        },
        beforeRemove: function () {
            return function (collection, _id) {
                var user = collection.findOne(_id),
                    name = user.profile.name,
                    message = 'Really remove user: ' + name + '?';

                if (confirm(message)) {
                    this.remove();
                    if (isCurrentUser(_id)) {
                        //Meteor.logout();
                    }
                }
            };
        }
    });
}

function isCurrentUser(_id) {
    return _id === Meteor.userId();
}