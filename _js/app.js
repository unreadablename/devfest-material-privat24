(function(){
	'use strict';

	var app = angular.module('privat24App', [
		'ngRoute'

	])
		.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/main.html',
					controller: 'MainCtrl',
					controllerAs: 'main'
				})
				.otherwise({
					redirectTo: '/'
				});

//			$locationProvider.html5Mode(true).hashPrefix('!');
		}]);

})();
