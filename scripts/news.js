angular.module('feedApp')
	.controller('NewsCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
		$scope.news = [];
		$http.get($rootScope.endpoint).then(function(response) {
			$scope.news = response.data;
		}, function(error) {
			console.log(error);
		});
	}])