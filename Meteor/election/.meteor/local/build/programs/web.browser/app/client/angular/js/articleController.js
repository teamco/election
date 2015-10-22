(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/angular/js/articleController.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
(function () {                                                         // 1
                                                                       //
    /**                                                                //
     * MainCtrl - controller                                           //
     */                                                                //
    function ArticleCtrl($scope, $http, $stateParams, $location) {     // 6
        $http.get('/angular/json/article.json?uuid=' + $stateParams.uuid).success((function (data) {
            $scope.article = data;                                     // 8
        }).bind(this));                                                //
                                                                       //
        $scope.feedBackPageNumber = 0;                                 // 11
                                                                       //
        $scope.loadFeedback = (function () {                           // 13
            function loadFeedback() {                                  // 13
                var response = $http.get('json/user-feedback.json?uuid=' + $stateParams.uuid + '&page=' + $scope.feedBackPageNumber).success((function (data) {
                    $scope.userFeedbacks = $scope.userFeedbacks || [];
                    if (data && data.message && jQuery.isArray(data.message)) {
                        $scope.userFeedbacks = $scope.userFeedbacks.concat(data.message);
                    }                                                  //
                }).bind(this));                                        //
                console.log(response);                                 // 20
            }                                                          //
                                                                       //
            return loadFeedback;                                       //
        })();                                                          //
                                                                       //
        $scope.onloadMoreFeedback = function () {                      // 23
            $scope.loadFeedback();                                     // 24
        };                                                             //
                                                                       //
        $scope.loadFeedback();                                         // 27
    }                                                                  //
                                                                       //
    angular.module('inspinia').controller('ArticleCtrl', ArticleCtrl);
})();                                                                  //
/////////////////////////////////////////////////////////////////////////

}).call(this);
