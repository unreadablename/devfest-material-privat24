(function(){
	'use strict';

	angular.module("privat24App").controller("MainCtrl", ['$scope', 'api', '$rootScope', function($scope, api, $rootScope) {
		$scope.posts = api.getPosts();
	}]);

})();