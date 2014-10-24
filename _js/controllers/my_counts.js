(function(){

	angular.module("privat24App", [
		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	]).controller("MyCountsCtrl", ['$scope', function($scope) {
		$scope.world = "FUCK YEAH";
	}]);

})();