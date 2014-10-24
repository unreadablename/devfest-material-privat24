(function(){

	angular.module("privat24App", [
		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	]).controller("MyPaymentsCtrl", ['$scope', function($scope) {
		$scope.world = "FUCK YEAH";
	}]);

})();