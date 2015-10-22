(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/calendar/calendar.js                                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
CalEvent = new Mongo.Collection('calevent');                           // 1
                                                                       //
CalEvent.allow({                                                       // 3
    insert: function (user_uuid, doc) {                                // 4
        debugger;                                                      // 4
        return doc.user_uuid === user_uuid;                            // 5
    }                                                                  //
});                                                                    //
if (Meteor.isServer) {                                                 // 8
    Meteor.startup(function () {                                       // 9
        Meteor.methods({                                               // 10
            'saveCalEvent': function (ce) {                            // 11
                debugger;                                              // 11
                CalEvent.insert(ce);                                   // 12
            },                                                         //
            'updateTitle': function (id, title) {                      // 14
                debugger;                                              // 14
                return CalEvent.update({ _id: id }, { $set: { title: title } });
            },                                                         //
            'moveEvent': function (reqEvent) {                         // 17
                debugger;                                              // 17
                return CalEvent.update({ _id: reqEvent._id }, {        // 18
                    $set: {                                            // 19
                        start: reqEvent.start,                         // 20
                        end: reqEvent.end                              // 21
                    }                                                  //
                });                                                    //
            }                                                          //
        });                                                            //
    });                                                                //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=calendar.js.map
