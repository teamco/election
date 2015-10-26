Accounts.onCreateUser(function (options, user) {

    var provider = Object.keys(user.services).shift() || '';
    var auth = getProviderInfo(provider, user);

    options = options || {};
    options.profile = options.profile || {};

    options.profile.picture = auth.picture;
    options.profile.provider = provider;
    options.profile.email = auth.email;
    options.profile.link = auth.link;
    options.profile.createdAt = user.createdAt;
    options.profile.updatedAt = user.createdAt;
    user.profile = options.profile;

    return user;
});

function getProviderInfo(provider, user) {

    var opts = {},
        info = user.services[provider];

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
                link: ''
            };
            break;
        case 'google':
            opts = {
                email: info.email,
                link: ''
            };
            break;
        case 'twitter':
            opts = {
                email: info.screenName,
                link: ''
            };
            break;
        default:
            opts = {
                email: user.emails[0].address,
                link: '/users/' + user._id
            };
            break;
    }

    if (!opts.picture) {
        opts.picture = Gravatar.imageUrl(opts.email, {});
    }

    return opts;
}

Meteor.publish("users", function () {
    return Meteor.users.find();
});