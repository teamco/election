(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/angular/js/config.js                                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * INSPINIA - Responsive Admin Theme                                   //
 * Copyright 2015 Webapplayers.com                                     //
 *                                                                     //
 * Inspinia theme use AngularUI Router to manage routing and views     //
 * Each view are defined as state.                                     //
 * Initial there are written state for all view in theme.              //
 *                                                                     //
 */                                                                    //
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/main");                       // 11
                                                                       //
    $ocLazyLoadProvider.config({                                       // 13
        // Set to true if you want to see what and when is dynamically loaded
        debug: true                                                    // 15
    });                                                                //
                                                                       //
    $stateProvider.state('index', {                                    // 18
        abstract: false,                                               // 20
        url: "/index",                                                 // 21
        templateUrl: "/angular/views/common/content.html"              // 22
    }).state('index.main', {                                           //
        url: "/main",                                                  // 25
        templateUrl: "/angular/views/main.html",                       // 26
        data: { pageTitle: 'Example view' }                            // 27
    }).state('index.minor', {                                          //
        url: "/minor",                                                 // 30
        templateUrl: "/angular/views/minor.html",                      // 31
        data: { pageTitle: 'Example view' }                            // 32
    }).state('index.donate', {                                         //
        url: "/donate",                                                // 35
        templateUrl: "/angular/views/donate.html"                      // 36
    }).state('index.parties', {                                        //
        url: "/parties",                                               // 39
        templateUrl: "/angular/views/parties.html"                     // 40
    }).state('index.candidates', {                                     //
        url: "/candidates",                                            // 43
        templateUrl: "/angular/views/candidates.html"                  // 44
    }).state('index.blog:uuid', {                                      //
        url: "/blog/:uuid",                                            // 47
        templateUrl: "/angular/views/article.html",                    // 48
        controller: 'ArticleCtrl'                                      // 49
    });                                                                //
}                                                                      //
var app = angular.module('inspinia').config(config).run(function ($rootScope, $state) {
    $rootScope.$state = $state;                                        // 56
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
