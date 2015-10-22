(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/model/account_profile.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
AccountProfile = new Mongo.Collection('account_profiles');             // 1
                                                                       //
Meteor.methods({                                                       // 3
    account_profile: function () {                                     // 4
        return {                                                       // 5
            create: function (account, opts) {                         // 6
                AccountProfile.insert({                                // 7
                    user_id: account._id,                              // 8
                    firstName: opts.firstName,                         // 9
                    middleName: opts.middleName,                       // 10
                    lastName: opts.lastName,                           // 11
                    birthday: opts.birthday,                           // 12
                    address: opts.address                              // 13
                });                                                    //
            },                                                         //
            update: function () {},                                    // 16
            destroy: function () {}                                    // 19
        };                                                             //
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
