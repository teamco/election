(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// model/parties.js                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Parties = new Mongo.Collection("parties");                             // 1
                                                                       //
Parties.allow({                                                        // 3
    insert: function (userId, party) {                                 // 4
        return userId && party.owner === userId;                       // 5
    },                                                                 //
    update: function (userId, party, fields, modifier) {               // 7
        return userId && party.owner === userId;                       // 8
    },                                                                 //
    remove: function (userId, party) {                                 // 10
        return userId && party.owner === userId;                       // 11
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
