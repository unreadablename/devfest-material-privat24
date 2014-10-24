(function(){

	angular.module("privat24App", [
		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	]).controller("DashboardCtrl", ['$scope', function($scope) {
		$scope.world = "FUCK YEAH";
	}]);

})();