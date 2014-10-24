(function(){
	'use strict';

	angular.module("privat24App").
		controller("MainCtrl", function($scope, api, $rootScope) {
		$scope.posts = api.getPosts();
	});

})();