Meteor.methods({
    createAccountProfile: function (account, opts) {

        debugger

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
    updateAccountProfile: function () {

    },
    destroyAccountProfile: function () {

    }
});