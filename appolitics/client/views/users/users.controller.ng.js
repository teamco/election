'use strict';

angular.module('appoliticsApp').controller('UsersCtrl', function ($scope) {

    $scope.allUsers = [];

    $scope.isCurrentUser = function (_id) {
        return _id === Meteor.userId();
    };

    $scope.beforeDeleteUser = function (user) {
        BootstrapModalPrompt.prompt({
            title: "Confirm",
            content: "Do you really want to delete user?"
        }, function (result) {
            if (result) {
                // User confirmed it, so go do something.
            } else {
                // User did not confirm, do nothing.
            }
        });
    };


    $scope.allUsers = Accounts.users.find().fetch();
});

Meteor.subscribe("allUsers");