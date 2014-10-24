(function(){
	'use strict';

	var app = angular.module('privat24App', [
		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	])
		.config(['$routeProvider', '$locationProvider', '$rootScope', function ($routeProvider, $locationProvider, $rootScope) {
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
