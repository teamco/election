'use strict'

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('donation', {
        url: '/donation',
        templateUrl: 'client/views/donation/donation.view.ng.html',
        controller: 'DonationCtrl'
    });
});