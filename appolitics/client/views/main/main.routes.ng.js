'use strict'

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'client/views/main/main.view.ng.html',
        controller: 'MainCtrl'
    });
});