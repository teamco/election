'use strict';

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('eventMangment', {
        url: '/eventMangment',
        templateUrl: 'client/views/eventMangment/eventMangment.view.ng.html',
        controller: 'EventMangmentCtrl'
    });
});