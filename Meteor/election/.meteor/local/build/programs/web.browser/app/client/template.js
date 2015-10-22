(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/template.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isClient) {                                                 // 1
                                                                       //
    Template.registerHelper('shortDate', function (date) {             // 3
        return moment(date).format('MM-DD-YYYY');                      // 4
    });                                                                //
                                                                       //
    Template.registerHelper('longDate', function (date) {              // 7
        return moment(date).format('MM-DD-YYYY HH:MM:SS');             // 8
    });                                                                //
                                                                       //
    Template.registerHelper('onError', function () {                   // 11
        return function (error) {                                      // 12
            Meteor.call('notify', 'serverMessage:error', 'Error', error, {
                timeout: 1000                                          // 14
            });                                                        //
        };                                                             //
    });                                                                //
                                                                       //
    Template.registerHelper('onSuccess', function () {                 // 19
        return function (result) {                                     // 20
            Meteor.call('notify', 'serverMessage:success', 'Success', result, {
                timeout: 1000                                          // 22
            });                                                        //
        };                                                             //
    });                                                                //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
