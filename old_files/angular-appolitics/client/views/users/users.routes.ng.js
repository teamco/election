'use strict';

angular.module('appoliticsApp').config(function ($stateProvider) {

    var viewPath = 'client/views/users/';

    $stateProvider.state('users', {
        url: '/users',
        templateUrl: viewPath + 'users.view.ng.html',
        controller: 'UsersCtrl'
    });

    $stateProvider.state('editUser', {
        url: '/users/:id',
        templateUrl: viewPath + 'edit/editUser.view.ng.html',
        controller: 'UsersCtrl',
        resolve: {
            currentUser: function ($meteor) {
                return $meteor.requireUser();
            }
        }
    });
});