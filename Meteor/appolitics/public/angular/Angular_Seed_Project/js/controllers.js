/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $http) {
    $http.get('/election/Meteor/appolitics/public/angular/Angular_Seed_Project/json/election.json').success(function(data) {
        $scope.site = data;
    }.bind(this));

    // Register event handler
    $scope.$on('endlessScroll:next', function() {
        // Determine which page to load
        //var page = $scope.pagination ? $scope.pagination.current_page + 1 : 1;
        // Load page
        //load(page);
    });

    $scope.loadMore = function() {
        debugger;
    }

    this.userName = 'Example user 111';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
};

angular.module('inspinia').controller('MainCtrl', MainCtrl);