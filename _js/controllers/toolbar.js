(function(){
	'use strict';

	angular.module("privat24App", [
		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	]).controller("ToolbarCtrl", ['$scope', function($scope) {
		$scope.selectedIndex = 0;

		$scope.onTabSelected = onTabSelected;

		// **********************************************************
		// Private Methods
		// **********************************************************

		function onTabSelected(tab) {
//			$scope.selectedIndex = tab.$index;

//			$scope.announceSelected(tab);
		}

	}]);

})();