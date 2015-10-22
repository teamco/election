(function(){angular.module("appolitics").controller("PartyDetailsController", ["$scope", "$stateParams", "$meteor", function ($scope, $stateParams, $meteor) {
    $scope.party = $meteor.object(Parties, $stateParams.partyId, false);
}]);
}).call(this);
