(function(){
	'use strict';

	angular.module("phoenixApp").controller("MainCtrl", ['$scope', 'api', function($scope, api) {
		$scope.posts = api.getPosts();
	}]);

})();