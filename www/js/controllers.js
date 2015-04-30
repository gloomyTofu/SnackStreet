angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicTabsDelegate, $location, $ionicHistory) {
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
	$scope.takePicture = function() {
		$scope.showModal('templates/modal/camera.html');
	}
	$scope.photoResults = function() {
		$scope.showModal('templates/modal/camera-results.html');
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
	$ionicHistory.nextViewOptions({
		disableAnimate: false,
		disableBack: true
	});
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
			"name": "Hot Foods",
			"description": "How hot is the key to food safety, the number you need to remember is 160F (71C). This is the temperature that will kill ALL harmful bugs in your food.",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Made to Order",
			"description": " As the time passes from cooking, the amount of harmful bugs is growing. Fresh from the grill is the best, an hour or two isn’t ideal but unlikely to get you sick (assuming it’s cooked properly), half a day or overnight has a high potential to get you sick.",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Clean/Orderly",
			"description": "Look for vendors whos' station appears to be clean and orderly. All ingredients are stored separately. Avoid vendors with uncooked food next to already cooked items.",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Too many options",
			"description": "Look for stalls that only serve 1-2 things on the menu only. Too many options leads to slow turnover of food and it sitting longer and growing more food bugs.",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Popular Stalls",
			"description": "A popular vendor means two things: 1.) The food isn’t given time to grow enough bacteria to hurt you  2.) That it’s popular for a reason, the food probably tastes GOOD!",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Peeled Fruit/Veggies",
			"description": "As a general rule of thumb if you can peel it, you can eat it. Bananas, oranges, anything with nature’s very own wrapper, you are generally good to go. Any fruit where you eat the skin like most berries, apples, etc. you need to be cautious.",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Dried Products",
			"description": "bugs that get you sick need water in the food in order to grow. Dried foods won’t allow for the bug population to get big enough to hurt you. Dried fruits, all kinds of chips, seeds (pumpkin, watermelon, ect.), even dried bugs, like crickets, fit this category.",
			"src": "http://placehold.it/350x350"
		},
		{
			"name": "Soups",
			"description": "soups and noodles soups are one of the safest meals because it is generally kept very hot. Typically you have a large pot with broth and ingredients that is kept at a good temp maybe not 160F (71C) but probably over 140F (60C)",
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
.controller('PhraseTipsController', ['$scope', 'audio', '$cordovaMedia', '$ionicLoading', function($scope, audio, $cordovaMedia, $ionicLoading) {
	$scope.phrases = [
		{
			"english": "Hello",
			"lang": "ສະບາຍດີ",
			"pronounce": "sabai di",
			"sound": "audio/hello.mp3"
		},
		{
			"english": "How much is this?",
			"lang": "ຕົກເປັນເງັນເທົາໃດ?",
			"pronounce": "tobpen ngen thao dai",
			"sound": "audio/how-much-is-this.mp3"
		},
		{
			"english": "Can I order this?",
			"lang": "ຕອ້ງການອັນນີອີກ?",
			"pronounce": "khew tngkan anan ek",
			"sound": "audio/can-i-order-this.mp3"
		},
		{
			"english": "Sticky rice",
			"lang": "ກັບເຂົ້າໜງວ",
			"pronounce": "eu kao niao ek",
			"sound": "audio/sticky-rice.mp3"
		},
		{
			"english": "Not spicy",
			"lang": "ບໍ່ ເຜັດ",
			"pronounce": "bo phed",
			"sound": "audio/no-spicy.mp3"
		},
		{
			"english": "Medium spicy",
			"lang": "ເຜັດ ປານກາງ",
			"pronounce": "phed pankang",
			"sound": "audio/medium-spicy.mp3"
		},
		{
			"english": "Very spicy",
			"lang": "ເອົາ ເຜັດ ໆ",
			"pronounce": "au phed phed",
			"sound": "audio/very-spicy.mp3"
		},
		{
			"english": "I'm vegetarian",
			"lang": "ຂອ້ຍ ບໍ່ ກີນຊີ້ນ",
			"pronounce": "khoi bo kin sin",
			"sound": "audio/vegetarian.mp3"
		},
		{
			"english": "Without fish sauce",
			"lang": "ບໍ່ ກີນນໍ້າປາ",
			"pronounce": "baw sai nam bpaa",
			"sound": "audio/no-fish-sauce.mp3"
		},
		{
			"english": "Without MSG",
			"lang": "ບໍ່ ກີນແປ້ງນົວ",
			"pronounce": "baw sai bang nuah",
			"sound": "audio/no-msg.mp3"
		},
		{
			"english": "Delicious!",
			"lang": "ແຊບຫລາຍ",
			"pronounce": "aesb lai",
			"sound": "audio/delicious.mp3"
		},
		{
			"english": "Thank you",
			"lang": "ຂອບໃຈຫລາຍໆ",
			"pronounce": "khowp jhai lai lai",
			"sound": "audio/thank-you.mp3"
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
}])
.controller('GuidesCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
  $scope.guides = [
    { 
        title: 'Laos', 
        name: 'laos',
        description: 'Fiery and fragrant, with a touch of sour, Lao food owes its distinctive taste to fermented fish sauce, lemongrass, coriander leaves, chillies and lime juice.',
        images: [
          {
            illustration: '',
            photo: 'img/laos.jpg'
          }
        ],
        canDownload:true
    },
    { title: 'Thailand', name: 'purchase', description: 'Five fundamental tastes are identified in Thai cuisine – spiciness, sourness, bitterness, saltiness and sweetness...', 
		 images: [
          {
            illustration: '',
            photo: 'img/thailand.jpg'
          }
        ],
		 canDownload:false },
    { title: 'Vietnam', name: 'purchase', description: 'Light, subtle in flavour and astonishing in their variety, Vietnamese dishes are boiled or steamed rather than stir-fried, and a huge emphasis is placed on herbs and seasoning.',
		 images: [
          {
            illustration: '',
            photo: 'img/vietnam.jpg'
          }
        ], canDownload:false }
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
})
.controller('OrderCards', ['$scope', '$ionicModal', function($scope, $ionicModal) {
	$scope.openModalOne = function() {
		$scope.showModal('templates/modal/translation.html');
	}
	$scope.openModalTwo = function() {
		$scope.showModal('templates/modal/translation2.html');
	}
	$scope.openModalThree = function() {
		$scope.showModal('templates/modal/translation3.html');
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
}])
.controller('ShareDish', ['$scope', '$ionicActionSheet', function($scope, $ionicActionSheet){
		//Actionsheet
	$scope.showActionsheet = function() {
		$ionicActionSheet.show({
			titleText: 'SHARE',
			buttons: [
				{ text: '<i class="ion-social-facebook"></i> Facebook' },
				{ text: '<i class="ion-social-twitter"></i> Twitter' },
				{ text: '<i class="ion-ios-more"></i> More' }
			],
			cancelText: 'Cancel',
			cancel: function() {
				console.log('CANCELLED');
			},
			buttonClicked: function(index) {
				console.log('BUTTON CLICKED', index);
				return true;
			}
		});
  };
}])
;