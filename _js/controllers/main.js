(function () {

  angular.module('privat24App', [
    'ngRoute',
    'ngMaterial',
    'picardy.fontawesome'
  ]).controller("MainCtrl", ['$scope', '$timeout', '$mdSidenav', '$mdDialog', function ($scope, $timeout, $mdSidenav, $mdDialog) {

    $scope.dashboard = {};
    $scope.dashboard.todos = [
      {
        icon: 'lightbulb-o',
        what: 'Облэнерго',
        when: '3:08PM',
        notes: "вул. Соломії Крушельницької 3, Львів, Львовська обл., 79000"
      },
      {
        icon: 'drupal',
        what: 'Водоканал и канализация',
        when: '3:08PM',
        notes: "вул. Соломії Крушельницької 3, Львів, Львовська обл., 79000"
      },
      {
        icon: 'cloud',
        what: 'Газ',
        when: '3:08PM',
        notes: "вул. Соломії Крушельницької 3, Львів, Львовська обл., 79000"
      }
    ];

    $scope.dashboard.cards = [
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
    ];

    $scope.dashboard.charities = [
      {
        name: 'Солдатам АТО',
      },
      {
        name: 'Детям депутатов на героин',
      }
    ];

    $scope.data = {
      maxIndex: 5,
      selectedIndex: 0,
      locked: true,
    };

    $scope.next = function () {
      $scope.data.selectedIndex = Math.min($scope.data.maxIndex, $scope.data.selectedIndex + 1);
    };

    $scope.previous = function () {
      $scope.data.selectedIndex = Math.max(0, ($scope.data.selectedIndex - 1));
    };

    $scope.my_counts = {};
    $scope.my_counts.toggleLeft = function () {
      $mdSidenav('my-count-left').toggle();
    };

    $scope.my_counts.close = function () {
      $mdSidenav('my-count-left').close();
    };


    $scope.all_services = {};
    $scope.all_services.toggleLeft = function () {
      $mdSidenav('all-services-left').toggle();
    };

    $scope.all_services.close = function () {
      $mdSidenav('all-services-left').close();
    };


    $scope.my_payments = {};
    $scope.my_payments.toggleLeft = function () {
      $mdSidenav('my-payments-left').toggle();
    };

    $scope.my_payments.close = function () {
      $mdSidenav('my-payments-left').close();
    };


    $scope.deposites = {};
    $scope.deposites.toggleLeft = function () {
      $mdSidenav('deposites-left').toggle();
    };

    $scope.deposites.close = function () {
      $mdSidenav('deposites-left').close();
    };


    function DialogController($scope, $mdDialog) {
      $scope.hide = function () {
        $mdDialog.hide();
      };

      $scope.answer = function (answer) {
        $mdDialog.hide(answer);
      };
    }

    $scope.accountFilled = function (ev) {
      $mdDialog.show({
        templateUrl: '/partials/account_filled.html',
        targetEvent: ev,
        controller: DialogController
      }).then(function () {

      }, function () {

      });
    };

    $scope.moneySent = function (ev) {
      $mdDialog.show({
        templateUrl: '/partials/money_sent.html',
        targetEvent: ev,
        controller: DialogController
      }).then(function () {

      }, function () {

      });
    };

    $scope.ticketBooked = function (ev) {
      $mdDialog.show({
        templateUrl: '/partials/ticket_booked.html',
        targetEvent: ev,
        controller: DialogController
      }).then(function () {

      }, function () {

      });
    };

    $scope.tickets = [
      {
        place: 'Kyiv',
      },
      {
        place: 'Lviv',
      },
      {
        place: 'Moscow',

      },
      {
        place: 'Cherkasy',

      },
      {
        place: 'Dnipropetrovsk',

      }
    ];

    $scope.charityConfirm = function (ev) {
      $mdDialog.show({
        templateUrl: '/partials/charity_confirm.html',
        targetEvent: ev,
        controller: DialogController
      }).then(function () {

      }, function () {

      });
    };

    $scope.my_payments.history = [{
      face: '/img/list/60.jpeg',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: '/img/list/60.jpeg',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: '/img/list/60.jpeg',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: '/img/list/60.jpeg',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: '/img/list/60.jpeg',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }];

  }]);


})();
