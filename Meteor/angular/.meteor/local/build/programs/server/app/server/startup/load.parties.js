(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/startup/load.parties.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
    if (!Parties.find().count()) {                                     // 2
        var parties = [{                                               // 3
            'name': 'Dubstep-Free Zone',                               // 5
            'description': 'Fast just got faster with Nexus S.'        // 6
        }, {                                                           //
            'name': 'All dubstep all the time',                        // 9
            'description': 'Get it on!'                                // 10
        }, {                                                           //
            'name': 'Savage lounging',                                 // 13
            'description': 'Leisure suit required. And only fiercest manners.'
        }];                                                            //
        for (var i = 0; i < parties.length; i++) Parties.insert({ name: parties[i].name, description: parties[i].description });
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=load.parties.js.map
