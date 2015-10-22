(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/angular/js/directives.js                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * INSPINIA - Responsive Admin Theme                                   //
 * Copyright 2015 Webapplayers.com                                     //
 *                                                                     //
 */                                                                    //
                                                                       //
/**                                                                    //
 * pageTitle - Directive for set Page title - mata title               //
 */                                                                    //
function pageTitle($rootScope, $timeout) {                             // 11
    return {                                                           // 12
        link: function (scope, element) {                              // 13
            var listener = function (event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1                 //
                var title = 'INSPINIA | Responsive Admin Theme';       // 16
                // Create your own title pattern                       //
                if (toState.data && toState.data.pageTitle) title = 'INSPINIA | ' + toState.data.pageTitle;
                $timeout(function () {                                 // 19
                    element.text(title);                               // 20
                });                                                    //
            };                                                         //
            $rootScope.$on('$stateChangeStart', listener);             // 23
        }                                                              //
    };                                                                 //
};                                                                     //
                                                                       //
/**                                                                    //
 * sideNavigation - Directive for run metsiMenu on sidebar navigation  //
 */                                                                    //
function sideNavigation($timeout) {                                    // 31
    return {                                                           // 32
        restrict: 'A',                                                 // 33
        link: function (scope, element) {                              // 34
            // Call the metsiMenu plugin and plug it to sidebar navigation
            $timeout(function () {                                     // 36
                element.metisMenu();                                   // 37
            });                                                        //
        }                                                              //
    };                                                                 //
};                                                                     //
                                                                       //
/**                                                                    //
 * iboxTools - Directive for iBox tools elements in right corner of ibox
 */                                                                    //
function iboxTools($timeout) {                                         // 46
    return {                                                           // 47
        restrict: 'A',                                                 // 48
        scope: true,                                                   // 49
        templateUrl: '/angular/views/common/ibox_tools.html',          // 50
        controller: function ($scope, $element) {                      // 51
            // Function for collapse ibox                              //
            $scope.showhide = function () {                            // 53
                var ibox = $element.closest('div.ibox');               // 54
                var icon = $element.find('i:first');                   // 55
                var content = ibox.find('div.ibox-content');           // 56
                content.slideToggle(200);                              // 57
                // Toggle icon from up to down                         //
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');     // 60
                $timeout(function () {                                 // 61
                    ibox.resize();                                     // 62
                    ibox.find('[id^=map-]').resize();                  // 63
                }, 50);                                                //
            },                                                         //
            // Function for close ibox                                 //
            $scope.closebox = function () {                            // 67
                var ibox = $element.closest('div.ibox');               // 68
                ibox.remove();                                         // 69
            };                                                         //
        }                                                              //
    };                                                                 //
};                                                                     //
                                                                       //
/**                                                                    //
 * minimalizaSidebar - Directive for minimalize sidebar                //
*/                                                                     //
function minimalizaSidebar($timeout) {                                 // 78
    return {                                                           // 79
        restrict: 'A',                                                 // 80
        template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
        controller: function ($scope, $element) {                      // 82
            $scope.minimalize = function () {                          // 83
                $("body").toggleClass("mini-navbar");                  // 84
                if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                    // Hide menu in order to smoothly turn on when maximize menu
                    $('#side-menu').hide();                            // 87
                    // For smoothly turn on menu                       //
                    setTimeout(function () {                           // 89
                        $('#side-menu').fadeIn(500);                   // 91
                    }, 100);                                           //
                } else if ($('body').hasClass('fixed-sidebar')) {      //
                    $('#side-menu').hide();                            // 94
                    setTimeout(function () {                           // 95
                        $('#side-menu').fadeIn(500);                   // 97
                    }, 300);                                           //
                } else {                                               //
                    // Remove all inline style from jquery fadeIn function to reset menu state
                    $('#side-menu').removeAttr('style');               // 101
                }                                                      //
            };                                                         //
        }                                                              //
    };                                                                 //
};                                                                     //
                                                                       //
/**                                                                    //
 *                                                                     //
 * Pass all functions into module                                      //
 */                                                                    //
angular.module('inspinia').directive('pageTitle', pageTitle).directive('sideNavigation', sideNavigation).directive('iboxTools', iboxTools).directive('minimalizaSidebar', minimalizaSidebar);
/////////////////////////////////////////////////////////////////////////

}).call(this);
