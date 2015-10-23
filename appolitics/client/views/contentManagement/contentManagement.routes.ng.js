'use strict';

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('contentManagement', {
        url: '/contentManagement',
        templateUrl: 'client/views/contentManagement/contentManagement.view.ng.html',
        controller: 'ContentManagementCtrl'
    });
});