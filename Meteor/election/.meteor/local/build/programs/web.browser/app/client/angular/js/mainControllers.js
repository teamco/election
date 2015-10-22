(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/angular/js/mainControllers.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * INSPINIA - Responsive Admin Theme                                   //
 * Copyright 2015 Webapplayers.com                                     //
 *                                                                     //
 */                                                                    //
                                                                       //
/**                                                                    //
 * MainCtrl - controller                                               //
 */                                                                    //
function MainCtrl($scope, $http) {                                     // 10
                                                                       //
    $scope.viewPath = '/angular/views/';                               // 12
                                                                       //
    $http.get('/angular/json/election.json').success((function (data) {
        $scope.site = data;                                            // 15
    }).bind(this));                                                    //
                                                                       //
    $scope.loadBlogs = (function () {                                  // 18
        function loadBlogs() {                                         // 18
            $scope.blogs = $scope.blogs || [];                         // 19
            $http.get('/angular/json/blogs.json').success((function (data) {
                $scope.blogs = $scope.blogs.concat(data.blogs);        // 21
            }).bind(this));                                            //
        }                                                              //
                                                                       //
        return loadBlogs;                                              //
    })();                                                              //
                                                                       //
    // Register event handler                                          //
    $scope.$on('endlessScroll:next', function () {                     // 26
        // Determine which page to load                                //
        //var page = $scope.pagination ? $scope.pagination.current_page + 1 : 1;
        // Load page                                                   //
        //load(page);                                                  //
    });                                                                //
                                                                       //
    $scope.onloadMoreBlogs = function () {                             // 33
        $scope.loadBlogs();                                            // 34
    };                                                                 //
                                                                       //
    $scope.loadBlogs();                                                // 37
                                                                       //
    this.userName = 'Example user 111';                                // 39
    this.helloText = 'Welcome in SeedProject';                         // 40
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
}                                                                      //
                                                                       //
angular.module('inspinia').controller('MainCtrl', MainCtrl);           // 44
/////////////////////////////////////////////////////////////////////////

}).call(this);
