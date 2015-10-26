'use strict';

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('eventManagement', {
        url: '/eventManagement',
        templateUrl: 'client/views/eventManagement/eventManagement.view.ng.html',
        controller: 'EventManagementCtrl'
    });
});