Meteor.methods({
    isAdmin: function() {
        return Meteor.userId();
    }
});