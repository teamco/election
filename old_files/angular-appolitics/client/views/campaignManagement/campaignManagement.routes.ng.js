'use strict'

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('campaignManagement', {
        url: '/campaignManagement',
        templateUrl: 'client/views/campaignManagement/campaignManagement.view.ng.html',
        controller: 'CampaignManagementCtrl'
    });
});