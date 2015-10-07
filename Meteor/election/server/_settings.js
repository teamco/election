// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
if (typeof Meteor.settings === 'undefined')
    Meteor.settings = {};

_.defaults(Meteor.settings, {
    facebook: {
        appId: '1472927183016726',
        secret: '57fc9f9efe160b8d2ceebc2de06db5ff'
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