(function(){

    /**
     * MainCtrl - controller
     */
    function ArticleCtrl($scope, $http, $stateParams, $location) {
        $http.get('/election/Meteor/appolitics/public/article.json?uuid=' + $stateParams.uuid).success(function(data) {
            console.log('>>>>>',data);
            $scope.content = data.content;
        }.bind(this));

    };
    angular.module('inspinia').controller('ArticleCtrl', ArticleCtrl);
}());