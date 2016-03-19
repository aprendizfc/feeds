angular.module('feedApp')
	.controller('NewsCtrl', ['$rootScope', '$scope', '$http', '$timeout', function($rootScope, $scope, $http, $timeout) {
		$scope.news = [];
		$scope.getNews = function() {
			$http.get($rootScope.endpoint).then(function(response) {
				$scope.news = response.data;
			}, function(error) {
				console.log(error);
			});
		}

		$scope.showNews = function(id) {
			var $cardContent = $("#" + id);
			var $title = $('.' + id).text();
			if ( $cardContent.hasClass('active') ) {
				$("#title").text($title).removeClass('bounceInDown').addClass('bounceOutLeft')
				$cardContent.removeClass('active');
			} else {
				$cardContent.addClass('active');
				$("#title").text($title).removeClass('bounceOutLeft').addClass('animated bounceInDown');
			}
		}
	}])