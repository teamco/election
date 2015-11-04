var admins = [
    'teamco@gmail.com',
    'nati.ari@gmail.com',
    'eyal32@gmail.com'
];

var candidates = [
    'a@a'
];

function _defineRoles(user, roles) {
    if (user._id) {
        Meteor.defer(function () {
            Roles.addUsersToRoles(user._id, roles, Roles.GLOBAL_GROUP);
        });
    }
}

function _getProviderInfo(provider, user) {

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

Accounts.onCreateUser(function (options, user) {

    var provider = Object.keys(user.services).shift() || '',
        auth = _getProviderInfo(provider, user);

    options = options || {};
    options.profile = options.profile || {};

    options.profile.picture = auth.picture;
    options.profile.provider = provider;
    options.profile.email = auth.email;
    options.profile.link = auth.link;
    options.profile.updatedAt = user.createdAt;

    user.profile = options.profile;

    if (admins.indexOf(auth.email) > -1) {
        _defineRoles(user, ['admin', 'end-user']);
    } else if (candidates.indexOf(auth.email) > -1) {
        _defineRoles(user, ['candidate', 'end-user']);
    } else {
        _defineRoles(user, ['end-user']);
    }

    return user;
});