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

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/urigo_angular-blaze-template/packages/urigo_angular-blaze-template.js                     //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
(function () {                                                                                        // 1
                                                                                                      // 2
//////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                              //    // 4
// packages/urigo:angular-blaze-template/angular-blaze-template.js                              //    // 5
//                                                                                              //    // 6
//////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                //    // 8
var angularMeteorTemplate = angular.module('angular-blaze-template', []);                       // 1  // 9
                                                                                                // 2  // 10
// blaze-template adds Blaze templates to Angular as directives                                 // 3  // 11
angularMeteorTemplate.directive('blazeTemplate', [                                              // 4  // 12
  '$compile',                                                                                   // 5  // 13
  function ($compile) {                                                                         // 6  // 14
    return {                                                                                    // 7  // 15
      restrict: 'AE',                                                                           // 8  // 16
      scope: false,                                                                             // 9  // 17
      link: function (scope, element, attributes) {                                             // 10
        // Check if templating and Blaze package exist, they won't exist in a                   // 11
        // Meteor Client Side (https://github.com/idanwe/meteor-client-side) application        // 12
        if (Template && Package['blaze']){                                                      // 13
                                                                                                // 14
          var name = attributes.blazeTemplate || attributes.name;                               // 15
          if (name && Template[name]) {                                                         // 16
                                                                                                // 17
            var template = Template[name];                                                      // 18
            var viewHandler = Blaze.renderWithData(template, scope, element[0]);                // 19
            $compile(element.contents())(scope);                                                // 20
                                                                                                // 21
            scope.$on('$destroy', function() {                                                  // 22
              Blaze.remove(viewHandler);                                                        // 23
            });                                                                                 // 24
                                                                                                // 25
          } else {                                                                              // 26
            console.error("meteorTemplate: There is no template with the name '" + name + "'"); // 27
          }                                                                                     // 28
        }                                                                                       // 29
      }                                                                                         // 30
    };                                                                                          // 31
  }                                                                                             // 32
]);                                                                                             // 33
                                                                                                // 34
var angularMeteorModule = angular.module('angular-meteor');                                     // 35
angularMeteorModule.requires.push('angular-blaze-template');                                    // 36
                                                                                                // 37
//////////////////////////////////////////////////////////////////////////////////////////////////    // 46
                                                                                                      // 47
}).call(this);                                                                                        // 48
                                                                                                      // 49
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['urigo:angular-blaze-template'] = {};

})();
