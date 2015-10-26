'use strict';

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('messages', {
        url: '/messages',
        templateUrl: 'client/views/messages/messages.view.ng.html',
        controller: 'MessagesCtrl'
    });
});