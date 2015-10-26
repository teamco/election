'use strict'

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('calendar', {
        url: '/calendar',
        templateUrl: 'client/views/calendar/calendar.view.ng.html',
        controller: 'CalendarCtrl'
    });
});