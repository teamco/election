angular.module('myTest4App', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'angularUtils.directives.dirPagination'
]);

onReady = function() {
  angular.bootstrap(document, ['myTest4App']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

angular
  .module('myTest4App')
  .run(run);

function run ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });

  Accounts.onLogin(function () {
    if ($state.is('login')) {
      $state.go('main');
    }
  });

  Accounts.onLoginFailure(function () {
    $state.go('login');
  });
}