'use strict'

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/',
        templateUrl: 'client/views/dashboard/dashboard.view.ng.html',
        controller: 'DashboardCtrl'
    });
});