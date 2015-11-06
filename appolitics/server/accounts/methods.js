Meteor.methods({
    updateUser: function (opts) {

        console.info(TAPi18n.__('user_updated_at'));
        Meteor.users.update(
            {_id: opts.userId},
            {$set: {"profile.updatedAt": new Date()}},
            {multi: true}
        );

        var profile = AccountProfile.findOne({userId: opts.userId}),
            method = 'create';

        if (profile) {
            method = 'update';
        }

        console.info(TAPi18n.__('account_profile', method));
        Meteor.call(
            method + 'AccountProfile', {
                userId: opts.userId,
                profile: opts.profile
            }
        );

        console.info(TAPi18n.__('user_roles', JSON.stringify(opts.access)));
        Meteor.call(
            'updateAccountRoles', {
                userId: opts.userId,
                access: opts.access
            }
        );

        return Meteor.users.findOne(opts.userId);
    },

    destroyUser: function (user) {

        Meteor.users.remove(user._id);
        return user;
    }
});