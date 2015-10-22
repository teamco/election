AccountProfile = new Mongo.Collection('account_profiles');

Meteor.methods({
    account_profile: function () {
        return {
            create: function (account, opts) {
                AccountProfile.insert({
                    user_id: account._id,
                    firstName: opts.firstName,
                    middleName: opts.middleName,
                    lastName: opts.lastName,
                    birthday: opts.birthday,
                    address: opts.address
                });
            },
            update: function () {

            },
            destroy: function () {

            }
        }
    }
});