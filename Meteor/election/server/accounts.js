Accounts.onCreateUser(function (options, user) {
    if ((options || {}).profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        options.profile.email = user.services.facebook.email;
        options.profile.link = user.services.facebook.link;
        user.profile = options.profile;
    }
    return user;
});