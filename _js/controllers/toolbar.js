(function(){
	'use strict';

	angular.module("privat24App", [
		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	]).controller("ToolbarCtrl", ['$scope', function($scope) {
		$scope.selectedIndex = 2;

		$scope.onTabSelected = onTabSelected;

		// **********************************************************
		// Private Methods
		// **********************************************************

		function onTabSelected(tab) {
			alert(this.$index);
//			$scope.selectedIndex = tab.$index;

//			$scope.announceSelected(tab);
		}

	}]);

})();