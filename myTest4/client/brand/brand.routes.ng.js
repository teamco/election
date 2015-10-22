'use strict'

angular.module('myTest4App')
.config(function($stateProvider) {
  $stateProvider
  .state('brand', {
    url: '/brand',
    templateUrl: 'client/about/brand.view.ng.html',
    controller: 'BrandCtrl'
  });
});
