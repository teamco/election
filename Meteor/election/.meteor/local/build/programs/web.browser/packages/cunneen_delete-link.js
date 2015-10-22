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
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Mongo = Package.mongo.Mongo;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/cunneen_delete-link/template.delete-button.js                            //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
                                                                                     // 1
Template.__checkName("quickRemoveLink");                                             // 2
Template["quickRemoveLink"] = new Template("Template.quickRemoveLink", (function() {
  var view = this;                                                                   // 4
  return HTML.A(HTML.Attrs(function() {                                              // 5
    return Spacebars.attrMustache(view.lookup("atts"));                              // 6
  }), Blaze.If(function() {                                                          // 7
    return Spacebars.call(view.templateContentBlock);                                // 8
  }, function() {                                                                    // 9
    return Blaze._InOuterTemplateScope(view, function() {                            // 10
      return Spacebars.include(function() {                                          // 11
        return Spacebars.call(view.templateContentBlock);                            // 12
      });                                                                            // 13
    });                                                                              // 14
  }, function() {                                                                    // 15
    return "Delete";                                                                 // 16
  }));                                                                               // 17
}));                                                                                 // 18
                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/cunneen_delete-link/delete-button.js                                     //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
Template.quickRemoveLink.helpers({                                                   // 1
  atts: function () {                                                                // 2
    var context = this, atts = {};                                                   // 3
    for (var prop in context) {                                                      // 4
      if (context.hasOwnProperty(prop) &&                                            // 5
          prop !== "_id" &&                                                          // 6
          prop !== "collection" &&                                                   // 7
          prop !== "onError" &&                                                      // 8
          prop !== "onSuccess" &&                                                    // 9
          prop !== "beforeRemove") {                                                 // 10
        atts[prop] = context[prop];                                                  // 11
      }                                                                              // 12
    }                                                                                // 13
                                                                                     // 14
    return atts;                                                                     // 15
  }                                                                                  // 16
});                                                                                  // 17
                                                                                     // 18
Template.quickRemoveLink.events({                                                    // 19
  'click a': function (event, template) {                                            // 20
    var self = this;                                                                 // 21
    var collection = lookup(self.collection);                                        // 22
    if (typeof Meteor !== "undefined" && Meteor.Collection) {                        // 23
      if (!(collection instanceof Meteor.Collection)) {                              // 24
        throw new Error("quickRemoveLink: collection attribute must be set to a Meteor.Collection instance or a string reference to a Meteor.Collection instance that is in the window scope.");
      }                                                                              // 26
    } else if (typeof Mongo !== "undefined" && Mongo.Collection) {                   // 27
      if (!(collection instanceof Mongo.Collection)) {                               // 28
        throw new Error("quickRemoveLink: collection attribute must be set to a Mongo.Collection instance or a string reference to a Mongo.Collection instance that is in the window scope.");
      }                                                                              // 30
    }                                                                                // 31
    var onError = self.onError || function (error) {                                 // 32
      alert("Delete failed");                                                        // 33
      console.log(error);                                                            // 34
    };                                                                               // 35
    var onSuccess = self.onSuccess || function () {};                                // 36
    var beforeRemove = self.beforeRemove || function () { this.remove(); };          // 37
    beforeRemove.call({                                                              // 38
      remove: function () {                                                          // 39
        collection.remove(self._id, function (error, result) {                       // 40
          if (error) {                                                               // 41
            onError(error);                                                          // 42
          } else {                                                                   // 43
            onSuccess(result);                                                       // 44
          }                                                                          // 45
        });                                                                          // 46
      }                                                                              // 47
    }, collection, self._id);                                                        // 48
  }                                                                                  // 49
});                                                                                  // 50
                                                                                     // 51
function lookup(obj) {                                                               // 52
  var ref = window, arr;                                                             // 53
  if (typeof obj === "string") {                                                     // 54
    arr = obj.split(".");                                                            // 55
    while(arr.length && (ref = ref[arr.shift()]));                                   // 56
    if (!ref) {                                                                      // 57
      throw new Error(obj + " is not in the window scope");                          // 58
    }                                                                                // 59
    return ref;                                                                      // 60
  }                                                                                  // 61
  return obj;                                                                        // 62
}                                                                                    // 63
                                                                                     // 64
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cunneen:delete-link'] = {};

})();
