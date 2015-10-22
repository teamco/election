(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/notification/notification.js                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
serverMessages.listen('serverMessage:info', function (subject, message, options) {
    Notifications.info(subject, message, options);                     // 2
});                                                                    //
                                                                       //
serverMessages.listen('serverMessage:warning', function (subject, message, options) {
    Notifications.warn(subject, message, options);                     // 6
});                                                                    //
                                                                       //
serverMessages.listen('serverMessage:success', function (subject, message, options) {
    Notifications.success(subject, message, options);                  // 10
});                                                                    //
                                                                       //
serverMessages.listen('serverMessage:error', function (subject, message, options) {
    Notifications.error(subject, message, options);                    // 14
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
