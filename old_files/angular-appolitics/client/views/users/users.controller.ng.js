'use strict';

angular.module('appoliticsApp').controller('UsersCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

    $scope.allUsers = [];

    $scope.isCurrentUser = function (_id) {
        return _id === Meteor.userId();
    };

    $scope.beforeDeleteUser = function (user) {

        var name = user.profile.name || user.profile.email;

        BootstrapModalPrompt.prompt({
            title: "Confirm",
            content: 'Do you really want to delete user: ' + name + '?'
        }, function (result) {
            if (result) {
                user.remove();
                if ($scope.isCurrentUser(_id)) {
                    Meteor.logout();
                }
            } else {
                // User did not confirm, do nothing.
            }
        });
    };

    Meteor.defer(function () {

        if ($stateParams.id) {
            $scope.user = Accounts.users.findOne($stateParams.id);
        }

        $scope.allUsers = Accounts.users.find().fetch();
    });
}]);

Meteor.subscribe("allUsers");