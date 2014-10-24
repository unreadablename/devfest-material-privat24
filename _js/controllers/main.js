(function(){
	'use strict';

	angular.module('privat24App', ['ngMaterial'])
		.controller("MainCtrl", ['$scope', function($scope) {

		$scope.tabs = [
			{
				partial: 'dashboard'
			},
			{
				partial: 'my_counts'
			},
			{
				partial: 'all_services'
			},
			{
				partial: 'my_payments'
			},
			{
				partial: 'deposites'
			},
			{
				partial: 'tickets'
			},
		];

		$scope.data = {
			maxIndex : 5,
			selectedIndex : 0,
			locked : true,
		};

		$scope.next = function() {
			$scope.data.selectedIndex = Math.min( $scope.data.maxIndex, $scope.data.selectedIndex + 1) ;
		};

		$scope.previous = function() {
			$scope.data.selectedIndex = Math.max(0, ($scope.data.selectedIndex - 1));
		};

	}]);



})();