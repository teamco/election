(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/notification.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
    notify: function () {                                              // 2
        serverMessages.notify.apply(serverMessages, arguments);        // 3
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=notification.js.map
