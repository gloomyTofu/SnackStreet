angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('GuidesCtrl', function($scope) {
  $scope.guides = [
    { title: 'Laos', name: 'laos' },
    { title: 'Thailand', name: 'thailand'  },
    { title: 'Vietnam', name: 'vietnam'  }
  ];
})
.controller('LaosCtrl', function($scope) {
  $scope.laos = [
    { title: 'Laap', id: 1 },
    { title: 'Papaya Salad', id: 2 },
    { title: 'Seafood Salad', id: 3 },
    { title: 'Waffle', id: 4 },
    { title: 'Curry Red Soup Noodle', id: 5 },
    { title: 'Buffalo Jerky', id: 6 }
  ];
})

.controller('DishesCtrl', function($scope, $stateParams) {
});