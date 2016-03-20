angular.module('feedApp')
	.controller('NewsCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
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
				$cardContent.removeClass('bounceInDown active').addClass('bounceOutUp');
			} else {
				$cardContent.addClass('bounceInDown active').removeClass('bounceOutUp');
				$("#title").text($title).removeClass('bounceOutLeft').addClass('animated bounceInDown');
			}
		}
	}])