(function(){
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
                abstract: true,
                url: "/index",
                templateUrl: "views/common/content.html"
            })
            .state('index.main', {
                url: "/main",
                templateUrl: "views/main.html",
                data: { pageTitle: 'Example view' }
            })
            .state('index.minor', {
                url: "/minor",
                templateUrl: "views/minor.html",
                data: { pageTitle: 'Example view' }
            })
            .state('index.blog', {
                url: "/blog",
                templateUrl: "views/blog.html"
            })
            .state('index.blog:uuid', {
                url: "/blog:uuid",
                templateUrl: "views/blog.html",
                controller: 'ArticleCtrl'
                /*controller: function($scope,$stateParams){
                    //do ajax to article here and load article
                    $scope.uuid= $stateParams.uuid;
                }*/
            })
    }
    var app = angular
        .module('inspinia')
        .config(config)
        .run(function($rootScope, $state) {
            $rootScope.$state = $state;
        });



}());
