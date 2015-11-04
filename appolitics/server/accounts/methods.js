Meteor.methods({
    updateUser: function (opts) {

        Meteor.users.update(
            {_id: this.userId},
            {$set: {"profile.updatedAt": new Date()}},
            {multi: true}
        );

        var profile = AccountProfile.findOne({userId: opts.userId}),
            method = 'create';

        if (profile) {
            method = 'update';
        }

        Meteor.call(
            method + 'AccountProfile', {
                userId: opts.userId,
                profile: opts.profile
            }
        );

        Meteor.call(
            'updateRoles', {
                userId: opts.userId,
                access: opts.access
            }
        );
    },
    destroyUser: function (user) {
        Meteor.users.remove(user._id);
        return user;
    }
});