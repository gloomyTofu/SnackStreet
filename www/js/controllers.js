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
.controller('LaosCtrl', ['$scope', function($scope) {
  $scope.laos = [
    { 
        title: 'laap', 
        name: 'minced-meat-salad', 
        shortDescription: 'A salad of minced meat, fish, seafood, or tofu. If there was a national dish of Laos, Laap would be a strong contender.', 
        keywords: ["spicy", "vegetarian-option", "local"],
        images: [
          {
            full: ''
          }
        ],
        loves: 10,
        local: 10,
        adventurous: 6
    },
    { 
        title: 'tam màk hung', 
        name: 'papaya-salad',
        shortDescription: 'A quintessentially Lao dish: spicy papaya salad.', 
        keywords: ["spicy", "vegetarian-option", "local"],
        images: [
          {
            full: ''
          }
        ],
        loves: 20,
        local: 9,
        adventurous: 5
    },
    { 
        title: 'mók pa', 
        name: 'fish-steamed-banana-leaves',
        shortDescription: 'Fish steamed in banana leaves. Well worth ordering if you can find it.', 
        keywords: ["local"],
        images: [
          {
            full: ''
          }
        ],
        loves: 3,
        local: 8,
        adventurous: 7
    },
    { 
        title: 'Waffle', 
        name: 'waffle',
        shortDescription: 'A popular street food in Vietnam, Pandan Waffles are Vietnamese-style waffles made with pandan and coconut milk.', 
        keywords: ["vegetarian-option", "sweet"],
        images: [
          {
            full: ''
          }
        ],
        loves: 2,
        local: 4,
        adventurous: 3
    },
    { 
        title: 'pîng kai', 
        name: 'grilled-chicken',
        shortDescription: 'A grilled favorite.', 
        keywords: ["spicy", "vegetarian-option", "local"],
        images: [
          {
            full: ''
          }
        ],
        loves: 1,
        local: 9,
        adventurous: 5
    },
    { 
        title: 'seen hang',     
        name: 'buffalo-jerky',
        shortDescription: 'Beef jerky that has been flash fried.', 
        keywords: ["local"],
        images: [
          {
            full: ''
          }
        ],
        loves: 4,
        local: 8,
        adventurous: 6
    }
  ];
   $scope.sortExpression = 'loves';
}])
.controller('DishesCtrl', function($scope, $stateParams) {
});