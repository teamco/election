Meteor.methods({
    createAccountProfile: function (opts) {
        if (opts.userId) {
            AccountProfile.insert(opts);
        }
    },
    updateAccountProfile: function (opts) {
        AccountProfile.update(
            {userId: opts.userId},
            {$set: opts.profile},
            {multi: true}
        );
    },
    destroyAccountProfile: function () {

    }
});