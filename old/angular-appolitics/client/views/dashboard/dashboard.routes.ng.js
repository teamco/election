'use strict'

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'client/views/dashboard/dashboard.view.ng.html',
        controller: 'DashboardCtrl'
    });
});