(function(){


	var app = angular.module('privat24App', [

		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	])
		.config(['$routeProvider',function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/partials/main.html',
					controller: 'MainCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});


//			$locationProvider.html5Mode(true).hashPrefix('!');
		}]);


//	app.controller("MainCtrl", ['$scope', function($scope) {
//		$scope.selectedIndex = 0;
//
//		$scope.onTabSelected = onTabSelected;

		// **********************************************************
		// Private Methods
		// **********************************************************

//		function onTabSelected(tab) {
//			alert(this.$index);
////			$scope.selectedIndex = tab.$index;
//
////			$scope.announceSelected(tab);
//		}

//	}]);

//	function MainCtrl($scope, Page) {
//		console.log(Page);
//		$scope.page= Page;
//	}

})();
