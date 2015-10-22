'use strict';

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('inbox', {
        url: '/inbox',
        templateUrl: 'client/views/inbox/inbox.view.ng.html',
        controller: 'InboxCtrl'
    });
});