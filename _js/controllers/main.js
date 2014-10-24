(function(){
	'use strict';

	angular.module("privat24App").controller("MainCtrl", ['$scope', 'api', function($scope, api) {
		$scope.posts = api.getPosts();
	}]);

})();