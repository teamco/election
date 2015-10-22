(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/accounts.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Accounts.onCreateUser(function (options, user) {                       // 1
                                                                       //
    var provider = Object.keys(user.services).shift() || '';           // 3
    var auth = getProviderInfo(provider, user);                        // 4
                                                                       //
    options = options || {};                                           // 6
    options.profile = options.profile || {};                           // 7
                                                                       //
    options.profile.picture = auth.picture;                            // 9
    options.profile.provider = provider;                               // 10
    options.profile.email = auth.email;                                // 11
    options.profile.link = auth.link;                                  // 12
    options.profile.createdAt = user.createdAt;                        // 13
    options.profile.updatedAt = user.createdAt;                        // 14
    user.profile = options.profile;                                    // 15
                                                                       //
    return user;                                                       // 17
});                                                                    //
                                                                       //
Meteor.users.allow({                                                   // 20
    insert: function (_id, user) {                                     // 21
        return _id === user._id;                                       // 22
    },                                                                 //
    update: function (_id, user) {                                     // 24
        return _id === user._id;                                       // 25
    },                                                                 //
    remove: function (_id, user) {                                     // 27
        return _id === user._id;                                       // 28
    }                                                                  //
});                                                                    //
                                                                       //
function getProviderInfo(provider, user) {                             // 32
                                                                       //
    var opts = {},                                                     // 34
        info = user.services[provider];                                //
                                                                       //
    switch (provider) {                                                // 37
        case 'facebook':                                               // 38
            opts = {                                                   // 39
                email: info.email,                                     // 40
                picture: 'http://graph.facebook.com/' + info.id + '/picture/?type=small',
                link: info.link                                        // 42
            };                                                         //
            break;                                                     // 44
        case 'github':                                                 // 45
            opts = {                                                   // 46
                email: info.email,                                     // 47
                link: ''                                               // 48
            };                                                         //
            break;                                                     // 50
        case 'google':                                                 // 50
            opts = {                                                   // 52
                email: info.email,                                     // 53
                link: ''                                               // 54
            };                                                         //
            break;                                                     // 56
        case 'twitter':                                                // 56
            opts = {                                                   // 58
                email: info.screenName,                                // 59
                link: ''                                               // 60
            };                                                         //
            break;                                                     // 62
        default:                                                       // 62
            opts = {                                                   // 64
                email: user.emails[0].address,                         // 65
                link: '/users/' + user._id                             // 66
            };                                                         //
            break;                                                     // 68
    }                                                                  // 68
                                                                       //
    if (!opts.picture) {                                               // 71
        opts.picture = Gravatar.imageUrl(opts.email, {});              // 72
    }                                                                  //
                                                                       //
    return opts;                                                       // 75
}                                                                      //
                                                                       //
Meteor.publish("allUsers", function () {                               // 78
    return Meteor.users.find();                                        // 79
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=accounts.js.map
