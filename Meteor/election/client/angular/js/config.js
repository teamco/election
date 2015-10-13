/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: true
    });

    $stateProvider
        .state('index', {
            abstract: false,
            url: "/index",
            templateUrl: "/angular/views/common/content.html"
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "/angular/views/main.html",
            data: {pageTitle: 'Example view'}
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "/angular/views/minor.html",
            data: {pageTitle: 'Example view'}
        })
        .state('index.donate', {
            url: "/donate",
            templateUrl: "/angular/views/donate.html"
        })
        .state('index.parties', {
            url: "/parties",
            templateUrl: "/angular/views/parties.html"
        })
        .state('index.candidates', {
            url: "/candidates",
            templateUrl: "/angular/views/candidates.html"
        })
        .state('index.blog:uuid', {
            url: "/blog/:uuid",
            templateUrl: "/angular/views/article.html",
            controller: 'ArticleCtrl'
        })
}
var app = angular
    .module('inspinia')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });

