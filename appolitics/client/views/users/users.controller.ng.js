'use strict';

angular.module('appoliticsApp').controller('UsersCtrl', function ($scope) {

    $scope.allUsers = [];

    $scope.isCurrentUser = function (_id) {
        return _id === Meteor.userId();
    };

    $scope.beforeDeleteUser = function (user) {

    };



    $scope.allUsers = Accounts.users.find().fetch();
});

Meteor.subscribe("allUsers");