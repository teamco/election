'use strict';

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('reports', {
        url: '/reports',
        templateUrl: 'client/views/reports/reports.view.ng.html',
        controller: 'ReportsCtrl'
    });
});