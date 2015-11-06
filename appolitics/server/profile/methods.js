Meteor.methods({
    createAccountProfile: function (opts) {
        AccountProfile.insert(opts);
    },
    updateAccountProfile: function (opts) {
        AccountProfile.update(
            {userId: opts.userId},
            {$set: {profile: opts.profile}},
            {multi: true}
        );
    },
    destroyAccountProfile: function () {

    }
});