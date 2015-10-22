(function(){angular.module('appolitics').controller('PartiesListController', ["$scope", "$meteor", function ($scope, $meteor) {
    $scope.parties = $meteor.collection(Parties).subscribe('parties');

    $scope.save = function () {
        $scope.party.save().then(function (numberOfDocs) {
            console.log('save success doc affected ', numberOfDocs);
        }, function (error) {
            console.log('save error', error);
        });
    };

    $scope.reset = function () {
        $scope.party.reset();
    };

    $scope.remove = function (party) {
        $scope.parties.remove(party);
    };

    $scope.removeAll = function () {
        $scope.parties.remove();
    };
}]);
}).call(this);
