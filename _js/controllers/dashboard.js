(function(){

	angular.module("privat24App", [
		'ngRoute',
		'ngMaterial',
		'picardy.fontawesome'
	]).controller("DashboardCtrl", ['$scope', function($scope) {
    $scope.todos = [
      {
        icon : 'lightbulb-o',
        what: 'Облэнерго',
        when: '3:08PM',
        notes: "вул. Соломії Крушельницької 3, Львів, Львовська обл., 79000"
      },
      {
        icon : 'drupal',
        what: 'Водоканал и канализация',
        when: '3:08PM',
        notes: "вул. Соломії Крушельницької 3, Львів, Львовська обл., 79000"
      },
      {
        icon : 'cloud',
        what: 'Газ',
        when: '3:08PM',
        notes: "вул. Соломії Крушельницької 3, Львів, Львовська обл., 79000"
      }
    ]

    $scope.cards = [
      {
        name: 'Internet Card',
        digits: '2409',
        currency: 'дол',
        balance: '1.47',
        last_update: '22.10.2014 16:47'
      },
      {
        name: 'Patriotic Card',
        digits: '9749',
        currency: 'грн',
        balance: '5420.44',
        last_update: '22.10.2014 16:47'
      },
      {
        name: 'Карта для выплат',
        digits: '6772',
        currency: 'дол',
        balance: '192.12',
        last_update: '22.10.2014 16:47'
      },
      {
        name: 'Пенсионная карта',
        digits: '4703',
        currency: 'грн',
        balance: '0.00',
        last_update: '22.10.2014 16:47'
      }
    ]

	}]);

})();
