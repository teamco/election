ActiveMenu = new Mongo.Collection('active-menu');

ActiveMenu.allow({
    insert: function (_id, user) {
        return _id === user._id;
    },
    update: function (_id, user) {
        return _id === user._id;
    },
    remove: function (_id, user) {
        return _id === user._id;
    }
});