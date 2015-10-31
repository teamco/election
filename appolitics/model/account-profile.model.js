AccountProfile = new Mongo.Collection('account_profile');

Meteor.methods({
    create: function (account, opts) {
        AccountProfile.insert({
            user_id: account._id,
            userFirstName: opts.firstName,
            userMiddleName: opts.middleName,
            userLastName: opts.lastName,
            userBirthday: opts.birthday,
            userCountry: opts.country,
            userAddress: opts.address
        });
    },
    update: function () {

    },
    destroy: function () {

    }
});