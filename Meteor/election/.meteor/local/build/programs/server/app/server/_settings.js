(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/_settings.js                                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Provide defaults for Meteor.settings                                //
//                                                                     //
// To configure your own Twitter keys, see:                            //
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
if (typeof Meteor.settings === 'undefined') Meteor.settings = {};      // 5
                                                                       //
_.defaults(Meteor.settings, {                                          // 8
    facebook: {                                                        // 9
        appId: '1472927183016726',                                     // 10
        secret: '57fc9f9efe160b8d2ceebc2de06db5ff'                     // 11
    }                                                                  //
});                                                                    //
                                                                       //
ServiceConfiguration.configurations.upsert({ service: "facebook" }, {  // 15
    $set: {                                                            // 18
        appId: Meteor.settings.facebook.appId,                         // 19
        secret: Meteor.settings.facebook.secret                        // 20
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_settings.js.map
