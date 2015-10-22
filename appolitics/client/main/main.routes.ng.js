'use strict'

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'client/main/main.view.ng.html',
        controller: 'MainCtrl'
    });
});