angular.module('appoliticsApp', [
    'angular-meteor',
    'ui.router',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination'
]);

onReady = function () {
    angular.bootstrap(document, ['appoliticsApp']);
};

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}