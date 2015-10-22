(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/parties.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish("parties", function () {                                // 1
    return Parties.find({                                              // 2
        $or: [{                                                        // 3
            $and: [{ "public": true }, { "public": { $exists: true } }]
        }, {                                                           //
            $and: [{ owner: this.userId }, { owner: { $exists: true } }]
        }]                                                             //
    });                                                                //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=parties.js.map
