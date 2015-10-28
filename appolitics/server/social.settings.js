if (typeof Meteor.settings === 'undefined')
    Meteor.settings = {};

_.defaults(Meteor.settings, {
    facebook: {
        appId: '1472927183016726',
        secret: '57fc9f9efe160b8d2ceebc2de06db5ff'
    },
    google: {
        clientId: '14598528045-eokj3jf90gbf6f2sclqkvkblsvalp4p2.apps.googleusercontent.com',
        secret: 'H8mASCDMX3payZfUzfsrPTGR'
    },
    twitter: {
        consumerKey: 'ujpBvDxHvuORzINzTNUJxvl5D',
        secret: 'llEfDqQbiH3j02ghJWqMbW3eirKa9RbtFhgH7RV9HFREVANhD7'
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

ServiceConfiguration.configurations.upsert(
    {service: "google"},
    {
        $set: {
            clientId: Meteor.settings.google.clientId,
            secret: Meteor.settings.google.secret
        }
    }
);

ServiceConfiguration.configurations.upsert(
    {service: "twitter"},
    {
        $set: {
            consumerKey: Meteor.settings.twitter.consumerKey,
            secret: Meteor.settings.twitter.secret
        }
    }
);