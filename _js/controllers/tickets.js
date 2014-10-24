(function(){

	angular.module("privat24App", [
		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	]).controller("TicketsCtrl", ['$scope', function($scope) {
		$scope.world = "FUCK YEAH";
	}]);

})();