angular
	.module('feedApp', ['ngLoadingSpinner'])
	.run(function($rootScope) {
		$rootScope.endpoint = 'news_mock.json';
	});