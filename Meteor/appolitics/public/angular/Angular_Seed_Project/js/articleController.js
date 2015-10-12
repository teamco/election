(function(){

    /**
     * MainCtrl - controller
     */
    function ArticleCtrl($scope, $http, $stateParams, $location) {
        $http.get('json/article.json?uuid=' + $stateParams.uuid).success(function(data) {
            $scope.article = data;
        }.bind(this));

        $scope.feedBackPageNumber = 0;

        $scope.loadFeedback = function loadFeedback () {
            var response = $http.get('json/user-feedback.json?uuid=' + $stateParams.uuid + '&page=' + $scope.feedBackPageNumber).success(function (data) {
                $scope.userFeedbacks = $scope.userFeedbacks || [];
                if (data && data.message && jQuery.isArray(data.message)) {
                    $scope.userFeedbacks = $scope.userFeedbacks.concat(data.message);
                }
            }.bind(this));
            console.log(response);
        }

        $scope.onloadMoreFeedback = function(){
            $scope.loadFeedback();
        }
        $scope.loadFeedback();

    };
    angular.module('inspinia').controller('ArticleCtrl', ArticleCtrl);
}());