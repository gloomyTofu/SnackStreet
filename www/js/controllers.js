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
})
.controller('GuideCtrl', ['$scope', 'Dish', function($scope, Dish) {
  $scope.dishes = Dish.query();
  $scope.query = 'loves';
}])
.controller('DishesCtrl', ['$scope', '$stateParams', 'Dish', '$ionicModal', '$ionicSlideBoxDelegate', function($scope, $stateParams, Dish, $ionicModal, $ionicSlideBoxDelegate) {
  $scope.dish = Dish.get({dishId: $stateParams.dishId });
	$scope.query = 'loves';
	
	$scope.updateSlider = function () {
  	$ionicSlideBoxDelegate.update(); //or just return the function
  }
	
	$scope.showImages = function(index) {
		$scope.activeSlide = index;
		$scope.showModal('templates/modal/image-popover.html');
	}
 
	$scope.showModal = function(templateUrl) {
		$ionicModal.fromTemplateUrl(templateUrl, {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
		});
	}
 
	// Close the modal
	$scope.closeModal = function() {
		$scope.modal.hide();
		$scope.modal.remove()
	};
}])
.controller('OpenModal', ['$scope', '$ionicModal', function($scope, $ionicModal){
	
	$scope.openModal = function() {
		$scope.showModal('templates/modal/popover.html');
	}
 
	$scope.showModal = function(templateUrl) {
		$ionicModal.fromTemplateUrl(templateUrl, {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
		});
	}
 
	// Close the modal
	$scope.closeModal = function() {
		$scope.modal.hide();
		$scope.modal.remove()
	};
}])
.controller('NoteController', function($scope) {
    this.myReview = {};

    this.addMyReview = function(dish) {
      dish.myReview.push(this.myReview);
			
      this.myReview = {};
    };
})
.controller('MyCtrl', function($scope) {
 $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true
})
;