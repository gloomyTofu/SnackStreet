angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicTabsDelegate) {
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
.controller('SafetyTipsController', function($scope, $ionicModal, $ionicSlideBoxDelegate){
	$scope.safety = [
		{
			"name": "Tap Water/Ice",
			"description": "Do not drink river or tap water. Chinese tea made from boiled water is generally safe, but travellers should shun ice that doesn’t look factory-made.",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Bottled Water",
			"description": "Safe bottled water is available almost anywhere, though when buying, check that the seal is unbroken as bottles are occasionally refilled from the tap.",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Raw Fruits/Veggies",
			"description": "Description",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Peeled Fruit/Veggies",
			"description": "Description",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Dried Products",
			"description": "Description",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Title",
			"description": "Description",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Title",
			"description": "Description",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Title",
			"description": "Description",
			"src": "http://placehold.it/350x350"
		}
	];
	$scope.showImages = function(index) {
		$scope.activeSlide = index;
		$scope.showModal('templates/modal/safety-popover.html');
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
		$scope.modal.remove();
	};
})
.controller('PhraseTipsController', function($scope) {
	$scope.phrases = [
		{
			"english": "Hello",
			"lang": "ສະບາຍດີ",
			"pronounce": "sabai di",
			"sound": "#"
		},
		{
			"english": "How much is this?",
			"lang": "ຫຼາຍປານໃດ",
			"pronounce": "rai pandai",
			"sound": "#"
		},
		{
			"english": "Can I order this?",
			"lang": "ຫຼາຍປານໃດ",
			"pronounce": "rai pandai",
			"sound": "#"
		},
		{
			"english": "Sticky rice",
			"lang": "?? ກິນ ຊີ້ນ ??",
			"pronounce": "baw sai phong su lot",
			"sound": "#"
		},
		{
			"english": "Not spicy",
			"lang": "ບໍ່ ເຜັດ",
			"pronounce": "bo  phed",
			"sound": "#"
		},
		{
			"english": "Medium spicy",
			"lang": "ບໍ່ ເຜັດ",
			"pronounce": "bo  phed",
			"sound": "#"
		},
		{
			"english": "Very spicy",
			"lang": "ບໍ່ ເຜັດ",
			"pronounce": "bo  phed",
			"sound": "#"
		},
		{
			"english": "I'm vegetarian",
			"lang": "?? ກິນ ?? ຜັກ",
			"pronounce": "khoi kin te phak",
			"sound": "#"
		},
		{
			"english": "Without fish sauce",
			"lang": "?? ກິນ ຊີ້ນ ??",
			"pronounce": "baw sai nam pa",
			"sound": "#"
		},
		{
			"english": "Without MSG",
			"lang": "?? ກິນ ຊີ້ນ ??",
			"pronounce": "baw sai phong su lot",
			"sound": "#"
		},
		{
			"english": "Delicious!",
			"lang": "ນົວ",
			"pronounce": "saep",
			"sound": "#"
		},
		{
			"english": "Thank you",
			"lang": "ຂໍຂອບໃຈທ່ານ",
			"pronounce": "khokhobchaithan",
			"sound": "#"
		}
	];
	$scope.togglePhrase = function(phrase) {
    if ($scope.isPhraseShown(phrase)) {
      $scope.shownPhrase = null;
    } else {
      $scope.shownPhrase = phrase;
    }
  };
  $scope.isPhraseShown = function(phrase) {
    return $scope.shownPhrase === phrase;
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
		$scope.modal.remove();
		$scope.myOrder = {};
	};
}])
.controller('NoteController', function($scope) {
	this.myReview = {};

	this.addMyReview = function(dish) {
		dish.myReview.push(this.myReview);
		this.myReview = {};
	};

	$scope.shouldShowDelete = false;
	$scope.shouldShowReorder = false;
	$scope.listCanSwipe = true;
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = [];
})
.controller('OrderController', function($scope) {
	this.myOrder = {};

	this.addMyOrder = function(dish) {
		dish.myOrder.push(this.myOrder);
		this.myOrder = {};
	};
	
	console.log($scope.myOrder);
})
;