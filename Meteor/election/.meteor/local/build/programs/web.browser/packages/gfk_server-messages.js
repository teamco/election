//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;

/* Package-scope variables */
var Internals, ServerMessages, ChannelListener, publishMethods;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/gfk_server-messages/packages/gfk_server-messages.js                                           //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
(function () {                                                                                            // 1
                                                                                                          // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                  //    // 4
// packages/gfk:server-messages/shared/internals.js                                                 //    // 5
//                                                                                                  //    // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                    //    // 8
/* global Internals:true*/                                                                          // 1  // 9
                                                                                                    // 2  // 10
/***                                                                                                // 3  // 11
 * Internal namespace used for constants and collection instance                                    // 4  // 12
 *                                                                                                  // 5  // 13
 * @namespace                                                                                       // 6  // 14
 * @type {{constants: {MAX_TIMESTAMP_AGE: number}, collection: Mongo.Collection}}                   // 7  // 15
 */                                                                                                 // 8  // 16
Internals = {                                                                                       // 9  // 17
  constants: {                                                                                      // 10
    MAX_TIMESTAMP_AGE: 2500                                                                         // 11
  },                                                                                                // 12
  collection: new Mongo.Collection('servermessages')                                                // 13
};                                                                                                  // 14
                                                                                                    // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 24
                                                                                                          // 25
}).call(this);                                                                                            // 26
                                                                                                          // 27
                                                                                                          // 28
                                                                                                          // 29
                                                                                                          // 30
                                                                                                          // 31
                                                                                                          // 32
(function () {                                                                                            // 33
                                                                                                          // 34
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 35
//                                                                                                  //    // 36
// packages/gfk:server-messages/shared/serverMessages.js                                            //    // 37
//                                                                                                  //    // 38
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 39
                                                                                                    //    // 40
ServerMessages = function (name) {                                                                  // 1  // 41
  this._name = name || 'default';                                                                   // 2  // 42
                                                                                                    // 3  // 43
  if (_.isFunction(this._init)) {                                                                   // 4  // 44
    //Client/server specific part of constructor                                                    // 5  // 45
    this._init.apply(this, arguments);                                                              // 6  // 46
  }                                                                                                 // 7  // 47
};                                                                                                  // 8  // 48
                                                                                                    // 9  // 49
ServerMessages.prototype = {};                                                                      // 10
                                                                                                    // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 52
                                                                                                          // 53
}).call(this);                                                                                            // 54
                                                                                                          // 55
                                                                                                          // 56
                                                                                                          // 57
                                                                                                          // 58
                                                                                                          // 59
                                                                                                          // 60
(function () {                                                                                            // 61
                                                                                                          // 62
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 63
//                                                                                                  //    // 64
// packages/gfk:server-messages/client/channelListener.js                                           //    // 65
//                                                                                                  //    // 66
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 67
                                                                                                    //    // 68
/* global ChannelListener:true*/                                                                    // 1  // 69
                                                                                                    // 2  // 70
ChannelListener = function (channel, collection) {                                                  // 3  // 71
  this.handlers = [];                                                                               // 4  // 72
  this.channel = channel;                                                                           // 5  // 73
                                                                                                    // 6  // 74
  this._observe = collection.find({                                                                 // 7  // 75
    channel: channel                                                                                // 8  // 76
  }).observe({                                                                                      // 9  // 77
    added: this._handleMessage.bind(this)                                                           // 10
  });                                                                                               // 11
};                                                                                                  // 12
                                                                                                    // 13
ChannelListener.prototype.addHandler = function (handler) {                                         // 14
  this.handlers.push(handler);                                                                      // 15
};                                                                                                  // 16
                                                                                                    // 17
ChannelListener.prototype.destroy = function () {                                                   // 18
  this._observe.stop();                                                                             // 19
};                                                                                                  // 20
                                                                                                    // 21
ChannelListener.prototype._handleMessage = function (message) {                                     // 22
  _.each(this.handlers, function (handler) {                                                        // 23
    handler.apply(handler, message.arguments);                                                      // 24
  });                                                                                               // 25
};                                                                                                  // 26
                                                                                                    // 27
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 96
                                                                                                          // 97
}).call(this);                                                                                            // 98
                                                                                                          // 99
                                                                                                          // 100
                                                                                                          // 101
                                                                                                          // 102
                                                                                                          // 103
                                                                                                          // 104
(function () {                                                                                            // 105
                                                                                                          // 106
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 107
//                                                                                                  //    // 108
// packages/gfk:server-messages/client/serverMessages.js                                            //    // 109
//                                                                                                  //    // 110
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 111
                                                                                                    //    // 112
_.extend(ServerMessages.prototype, {                                                                // 1  // 113
  /***                                                                                              // 2  // 114
   * Part of constructor that is server/client specific                                             // 3  // 115
   * @private                                                                                       // 4  // 116
   */                                                                                               // 5  // 117
  _init: function () {                                                                              // 6  // 118
    this._listeners = {};                                                                           // 7  // 119
    this._subscription = Meteor.subscribe('ServerMessages/publishMessages', this._name);            // 8  // 120
  },                                                                                                // 9  // 121
  /***                                                                                              // 10
   * Listen to a certain channel, execute the given handler when a message arrives                  // 11
   *                                                                                                // 12
   * @param channel the channel to listen to                                                        // 13
   * @param handler the handler to execute upon a new message                                       // 14
   */                                                                                               // 15
  listen: function (channel, handler) {                                                             // 16
    if (!this._listeners[channel]) {                                                                // 17
      this._addChannelListener(channel);                                                            // 18
    }                                                                                               // 19
                                                                                                    // 20
    this._listeners[channel].addHandler(handler);                                                   // 21
  },                                                                                                // 22
  /***                                                                                              // 23
   * Instantiates a new ChannelListener for the given channel                                       // 24
   * @param channel the channel to listen to                                                        // 25
   * @private                                                                                       // 26
   */                                                                                               // 27
  _addChannelListener: function (channel) {                                                         // 28
    this._listeners[channel] = new ChannelListener(                                                 // 29
      channel,                                                                                      // 30
      Internals.collection                                                                          // 31
    );                                                                                              // 32
  },                                                                                                // 33
  /***                                                                                              // 34
   * Cleans up current subscription and oberves on the collection.                                  // 35
   * Call this before setting the reference to ServerMessages to undefined to prevent memory leaks. // 36
   */                                                                                               // 37
  destroy: function () {                                                                            // 38
    _.invoke(this._listeners, 'destroy');                                                           // 39
    this._subscription.stop();                                                                      // 40
  }                                                                                                 // 41
});                                                                                                 // 42
                                                                                                    // 43
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 156
                                                                                                          // 157
}).call(this);                                                                                            // 158
                                                                                                          // 159
////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
