(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/model/campaign.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Campaign = new Mongo.Collection('campaigns');                          // 1
                                                                       //
Campaign.allow({                                                       // 3
    insert: function (user_uuid, doc) {                                // 4
        return doc.user_uuid === user_uuid;                            // 5
    }                                                                  //
});                                                                    //
                                                                       //
Campaign.latest = function () {                                        // 9
    return Campaign.find({}, { sort: { date: -1 }, limit: 1 });        // 10
};                                                                     //
                                                                       //
Meteor.methods({                                                       // 13
    campaigns: function () {                                           // 14
        return {                                                       // 15
            create: function () {},                                    // 16
            update: function () {},                                    // 18
            destroy: function () {}                                    // 21
        };                                                             //
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=campaign.js.map
