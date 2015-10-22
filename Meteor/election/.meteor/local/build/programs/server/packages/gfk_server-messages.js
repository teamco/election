(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;

/* Package-scope variables */
var Internals, ServerMessages, publishMethods, ChannelListener;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/gfk_server-messages/packages/gfk_server-messages.js                           //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
(function () {                                                                            // 1
                                                                                          // 2
//////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                  //    // 4
// packages/gfk:server-messages/shared/internals.js                                 //    // 5
//                                                                                  //    // 6
//////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                    //    // 8
/* global Internals:true*/                                                          // 1  // 9
                                                                                    // 2  // 10
/***                                                                                // 3  // 11
 * Internal namespace used for constants and collection instance                    // 4  // 12
 *                                                                                  // 5  // 13
 * @namespace                                                                       // 6  // 14
 * @type {{constants: {MAX_TIMESTAMP_AGE: number}, collection: Mongo.Collection}}   // 7  // 15
 */                                                                                 // 8  // 16
Internals = {                                                                       // 9  // 17
  constants: {                                                                      // 10
    MAX_TIMESTAMP_AGE: 2500                                                         // 11
  },                                                                                // 12
  collection: new Mongo.Collection('servermessages')                                // 13
};                                                                                  // 14
                                                                                    // 15
//////////////////////////////////////////////////////////////////////////////////////    // 24
                                                                                          // 25
}).call(this);                                                                            // 26
                                                                                          // 27
                                                                                          // 28
                                                                                          // 29
                                                                                          // 30
                                                                                          // 31
                                                                                          // 32
(function () {                                                                            // 33
                                                                                          // 34
//////////////////////////////////////////////////////////////////////////////////////    // 35
//                                                                                  //    // 36
// packages/gfk:server-messages/shared/serverMessages.js                            //    // 37
//                                                                                  //    // 38
//////////////////////////////////////////////////////////////////////////////////////    // 39
                                                                                    //    // 40
ServerMessages = function (name) {                                                  // 1  // 41
  this._name = name || 'default';                                                   // 2  // 42
                                                                                    // 3  // 43
  if (_.isFunction(this._init)) {                                                   // 4  // 44
    //Client/server specific part of constructor                                    // 5  // 45
    this._init.apply(this, arguments);                                              // 6  // 46
  }                                                                                 // 7  // 47
};                                                                                  // 8  // 48
                                                                                    // 9  // 49
ServerMessages.prototype = {};                                                      // 10
                                                                                    // 11
//////////////////////////////////////////////////////////////////////////////////////    // 52
                                                                                          // 53
}).call(this);                                                                            // 54
                                                                                          // 55
                                                                                          // 56
                                                                                          // 57
                                                                                          // 58
                                                                                          // 59
                                                                                          // 60
(function () {                                                                            // 61
                                                                                          // 62
//////////////////////////////////////////////////////////////////////////////////////    // 63
//                                                                                  //    // 64
// packages/gfk:server-messages/server/serverMessages.js                            //    // 65
//                                                                                  //    // 66
//////////////////////////////////////////////////////////////////////////////////////    // 67
                                                                                    //    // 68
_.extend(ServerMessages.prototype, {                                                // 1  // 69
  /***                                                                              // 2  // 70
   * Notifies the listeners of the given channel.                                   // 3  // 71
   * All other arguments are passed on to the listeners                             // 4  // 72
   *                                                                                // 5  // 73
   * @param channel the channel to notify                                           // 6  // 74
   */                                                                               // 7  // 75
  notify: function (channel) {                                                      // 8  // 76
    var args = [].slice.call(arguments);                                            // 9  // 77
    args.splice(0, 1);                                                              // 10
                                                                                    // 11
    this._cleanupOldMessages();                                                     // 12
                                                                                    // 13
    Internals.collection.insert({                                                   // 14
      instanceName: this._name,                                                     // 15
      channel: channel,                                                             // 16
      arguments: args,                                                              // 17
      timestamp: (new Date().getTime())                                             // 18
    });                                                                             // 19
  },                                                                                // 20
  /***                                                                              // 21
   * Cleans up old messages that are expired                                        // 22
   * @private                                                                       // 23
   */                                                                               // 24
  _cleanupOldMessages: function () {                                                // 25
    var timestamp = (new Date().getTime()) - Internals.constants.MAX_TIMESTAMP_AGE; // 26
                                                                                    // 27
    Internals.collection.remove({                                                   // 28
      timestamp: {$lt: timestamp}                                                   // 29
    });                                                                             // 30
  }                                                                                 // 31
});                                                                                 // 32
                                                                                    // 33
//////////////////////////////////////////////////////////////////////////////////////    // 102
                                                                                          // 103
}).call(this);                                                                            // 104
                                                                                          // 105
                                                                                          // 106
                                                                                          // 107
                                                                                          // 108
                                                                                          // 109
                                                                                          // 110
(function () {                                                                            // 111
                                                                                          // 112
//////////////////////////////////////////////////////////////////////////////////////    // 113
//                                                                                  //    // 114
// packages/gfk:server-messages/server/publish.js                                   //    // 115
//                                                                                  //    // 116
//////////////////////////////////////////////////////////////////////////////////////    // 117
                                                                                    //    // 118
/* global publishMethods:true*/                                                     // 1  // 119
                                                                                    // 2  // 120
                                                                                    // 3  // 121
/***                                                                                // 4  // 122
 * Namespace containing the publishes for the package.                              // 5  // 123
 * Only exposed for testing purposes                                                // 6  // 124
 *                                                                                  // 7  // 125
 * @type {{ServerMessages/publishMessages: Function}}                               // 8  // 126
 */                                                                                 // 9  // 127
publishMethods = {                                                                  // 10
  /***                                                                              // 11
   * Publishes all the messages for the given instanceName                          // 12
   *                                                                                // 13
   * @param instanceName the name of the instance to publish the messages for       // 14
   * @returns {any|Cursor}                                                          // 15
   */                                                                               // 16
  'ServerMessages/publishMessages': function (instanceName) {                       // 17
    var timestamp = (new Date().getTime()) - Internals.constants.MAX_TIMESTAMP_AGE; // 18
                                                                                    // 19
    return Internals.collection.find({                                              // 20
      instanceName: instanceName,                                                   // 21
      timestamp: {$gt: timestamp}                                                   // 22
    });                                                                             // 23
  }                                                                                 // 24
};                                                                                  // 25
                                                                                    // 26
_.each(publishMethods, function (fn, name) {                                        // 27
  Meteor.publish(name, fn);                                                         // 28
});                                                                                 // 29
                                                                                    // 30
                                                                                    // 31
//////////////////////////////////////////////////////////////////////////////////////    // 150
                                                                                          // 151
}).call(this);                                                                            // 152
                                                                                          // 153
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['gfk:server-messages'] = {
  ServerMessages: ServerMessages,
  ChannelListener: ChannelListener,
  Internals: Internals,
  publishMethods: publishMethods
};

})();

//# sourceMappingURL=gfk_server-messages.js.map
