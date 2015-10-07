// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
if (typeof Meteor.settings === 'undefined')
    Meteor.settings = {};

_.defaults(Meteor.settings, {
    facebook: {
        //appId: '417579755099789',
        //secret: 'e5c75d88a98cbad17f671129f5f448cd'
    }
});

ServiceConfiguration.configurations.upsert(
    {service: "facebook"},
    {
        $set: {
            appId: Meteor.settings.facebook.appId,
            secret: Meteor.settings.facebook.secret
        }
    }
);