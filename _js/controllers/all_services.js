(function(){

	angular.module("privat24App", [
		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	]).controller("AllServicesCtrl", ['$scope', function($scope) {
		$scope.world = "FUCK YEAH";
	}]);

})();