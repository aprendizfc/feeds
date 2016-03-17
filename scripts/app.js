angular
	.module('feedApp', [])
	.run(function($rootScope) {
		$rootScope.endpoint = 'news_mock.json';
	});