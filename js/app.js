var app = angular.module('multiPageApp', []);

app.controller('MyCtrl', function($scope) {
  $scope.fullName = {
    firstName: 'Mike',
    lastName: 'Sanchez'
  }
})

app.controller('MoneyCtrl', function($scope) {
  $scope.money = 56;
  $scope.bank = [54, 7, 29, 22];
})

app.controller('RepeatCtrl', function($scope) {
  $scope.className = ['Dylan', 'Mikey', 'Enrique', 'Chase', 'Morgan', 'Monique', 'JJ', 'Alex', 'Dom', 'Rena'];
  $scope.cars = [
    {
      name: 'Honda',
      color: 'Blue'
    },
    {
      name: 'Nissan',
      color: 'Black'
    },
    {
      name: 'Toyota',
      color: 'Green'
    },
    {
      name: 'Tesla',
      color: 'silver'
    },
  ]
})
