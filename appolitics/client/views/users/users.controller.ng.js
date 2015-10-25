'use strict';

angular.module('appoliticsApp').controller('UsersCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

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

    Meteor.defer(function () {
        if ($stateParams.id) {
            $scope.user = Accounts.users.findOne($stateParams.id);
        }
    });

    $scope.allUsers = Accounts.users.find().fetch();
}]);

Meteor.subscribe("allUsers");