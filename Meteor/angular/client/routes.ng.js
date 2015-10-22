angular.module("appolitics").run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === 'AUTH_REQUIRED') {
            $state.go('parties');
        }
    });
});

angular.module('appolitics').config(
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        //$locationProvider.html5Mode(true);

        $stateProvider.
            state('parties', {
                url: '/parties/',
                templateUrl: 'views/parties/parties-list.ng.html',
                controller: 'PartiesListController'
            }).
            state('partyDetails', {
                url: '/parties/:partyId/',
                templateUrl: 'views/parties/party-details.ng.html',
                controller: 'PartyDetailsController',
                resolve: {
                    currentUser: function ($meteor) {
                        return $meteor.requireUser();
                    }
                }
            });

        $urlRouterProvider.otherwise("/parties");
    }
);