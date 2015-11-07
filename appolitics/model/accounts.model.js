Meteor.users.allow({
    insert: function (_id, user) {
        return user && _id === user._id;
    },
    update: isOwnerDocument,
    remove: function (_id, user) {
        return user && _id === user._id;
    }
});