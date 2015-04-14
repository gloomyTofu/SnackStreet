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

.controller('GuidesCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
  $scope.guides = [
    { 
        title: 'Laos', 
        name: 'laos',
        description: 'Fiery and fragrant, with a touch of sour, Lao food owes its distinctive taste to fermented fish sauce, lemongrass, coriander leaves, chillies and lime juice.',
        images: [
          {
            illustration: '',
            photo: ''
          }
        ],
        canDownload:true
    },
    { title: 'Thailand', name: 'purchase', description: 'Five fundamental tastes are identified in Thai cuisine – spiciness, sourness, bitterness, saltiness and sweetness...', canDownload:false },
    { title: 'Vietnam', name: 'purchase', description: 'Light, subtle in flavour and astonishing in their variety, Vietnamese dishes are boiled or steamed rather than stir-fried, and a huge emphasis is placed on herbs and seasoning.', canDownload:false }
  ];
  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})
.controller('LaosCtrl', function($scope) {
  $scope.laos = [
    { title: 'Laap', name: 'laap' },
    { title: 'Papaya Salad', name: 'papaya-salad' },
    { title: 'Seafood Salad', name: 'seafood-salad' },
    { title: 'Waffle', name: 'waffle' },
    { title: 'Curry Red Soup Noodle', name: 'curry-red-soup-noodle' },
    { title: 'Buffalo Jerky', name: 'buffalo-jerky' }
  ];
})

.controller('DishesCtrl', function($scope, $stateParams) {
});