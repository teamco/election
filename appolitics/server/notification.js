Meteor.methods({
    notify: function () {
        serverMessages.notify.apply(serverMessages, arguments);
    }
});