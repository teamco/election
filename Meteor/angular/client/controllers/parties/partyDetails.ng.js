angular.module("appolitics").controller("PartyDetailsController", function ($scope, $stateParams, $meteor) {
    $scope.party = $meteor.object(Parties, $stateParams.partyId, false);
});