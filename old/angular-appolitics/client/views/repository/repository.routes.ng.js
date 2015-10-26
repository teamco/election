'use strict';

angular.module('appoliticsApp').config(function ($stateProvider) {
    $stateProvider.state('repository', {
        url: '/repository',
        templateUrl: 'client/views/repository/repository.view.ng.html',
        controller: 'RepositoryCtrl'
    });
});