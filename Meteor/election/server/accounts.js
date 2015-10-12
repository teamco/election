Accounts.onCreateUser(function (options, user) {

    var provider = Object.keys(user.services).shift() || '';
    var auth = getProviderInfo(provider, user.services);

    if ((options || {}).profile) {
        options.profile.picture = auth.picture;
        options.profile.provider = provider;
        options.profile.email = auth.email;
        options.profile.link = auth.link;
        options.profile.createdAt = user.createdAt;
        options.profile.updatedAt = user.createdAt;
        user.profile = options.profile;
    }
    return user;
});

Meteor.users.allow({
    insert: function (_id, user) {
        return _id === user._id;
    },
    update: function (_id, user) {
        return _id === user._id;
    },
    remove: function (_id, user) {
        return _id === user._id;
    }
});

function getProviderInfo(provider, oauth) {

    var opts = {},
        info = oauth[provider];

    switch (provider) {
        case 'facebook':
            opts = {
                email: info.email,
                picture: 'http://graph.facebook.com/' + info.id + '/picture/?type=small',
                link: info.link
            };
            break;
        case 'github':
            opts = {
                email: info.email,
                picture: '',
                link: ''
            };
            break;
        case 'google':
            opts = {
                email: info.email,
                picture: '',
                link: ''
            };
            break;
        case 'twitter':
            opts = {
                email: info.screenName,
                picture: '',
                link: ''
            };
            break;
    }

    return opts;
}
