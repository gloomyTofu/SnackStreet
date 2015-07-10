// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var snackApp = angular.module('starter', ['ionic', 'ngResource', 'ngCordova', 'starter.controllers', 'ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(['$compileProvider', function($compileProvider) {
        	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
}])
.config(['$sceProvider', function($sceProvider) {
	$sceProvider.enabled(false);
}])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'AppCtrl'
	})
	.state('app.guides', {
		url: "/guides",
		views: {
			'menuContent': {
				templateUrl: "templates/guides.html",
				controller: 'GuidesCtrl'
			}
		}
	})
	.state('app.laos', {
		url: "/guides/laos",
		cache: false,
		views: {
			'menuContent': {
				templateUrl: "templates/guides/laos.html",
				controller: 'GuideCtrl'
			}
		}
	})
	.state('app.single', {
		url: "/guides/laos/:dishId",
		views: {
			'menuContent': {
				templateUrl: "templates/guides/dishes.html",
				controller: 'DishesCtrl'
			}
		}
	})
	.state('app.purchase', {
		url: "/guides/purchase",
		views: {
			'menuContent': {
				templateUrl: "templates/purchase.html"
			}
		}
	})
	.state('app.safety', {
		url: "/travel/safety",
		views: {
			'menuContent': {
				templateUrl: "templates/safety.html"
			}
		}
	})
	.state('app.phrasebook', {
		url: "/travel/phrasebook",
		views: {
			'menuContent': {
				templateUrl: "templates/phrasebook.html",
				controller: "PhraseTipsController"
			}
		}
	})
	.state('app.profile', {
		url: "/profile",
		cache: false,
		views: {
			'menuContent': {
				templateUrl: "templates/profile.html"
			}
		}
	})
	.state('app.lists', {
		url: "/saved-lists",
		cache: false,
		views: {
			'menuContent': {
				templateUrl: "templates/lists.html"
			}
		}
	})
	;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/guides');
})
.factory('Dish', ['$resource',
  function($resource){
    return $resource('dishes/:dishId.json', {}, {
      query: {method:'GET', params:{dishId:'dishes'}, isArray:true}
    });
}])
.factory('audio', function($document){
	var audioElement = $document[0].getElementById('player');
	return {
		audioElement: audioElement,
		play: function(filename){
			audioElement.src = filename;
			audioElement.play();
		},
		pause: function(){
			audioElement.pause();
		}
	}
})
.directive('navClear', ['$ionicHistory', function($ionicHistory) {
  return {
    restrict: 'AC',
    link: function($scope, $element, $attr) {
      $element.bind('click', function(){
        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true
        });
      });
    }
  };
}])
.directive('saveDish', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/partial/save-dish.html'
	};
})
.directive('activityList', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/partial/activity-list.html'
	};
})
.directive('savedList', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/partial/saved-list.html'
	};
})
.directive('savedOrders', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/partial/saved-orders.html'
	};
})
.directive('triedList', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/partial/tried-list.html'
	};
})
.directive('likedList', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/partial/liked-list.html'
	};
})
.directive('profileMain', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/partial/profile-main.html'
	};
})
.directive('keywordsList', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/partial/keywords-list.html'
	};
})
.directive('dishReview', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/partial/dish-review.html'
	};
})
.directive('svgFavorite', function(){
	return {
		restrict: 'A',
		templateUrl: 'templates/svg/svg-favorite.html'
	};
})
.directive('svgSound', function(){
	return {
		restrict: 'A',
		templateUrl: 'templates/svg/svg-sound.html'
	};
})
.directive('svgProfile', function(){
	return {
		restrict: 'A',
		templateUrl: 'templates/svg/svg-profile.html'
	};
})
.directive('svgCamera', function(){
	return {
		restrict: 'A',
		templateUrl: 'templates/svg/svg-camera.html'
	};
})
.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
})
;

// Cordova Camera
snackApp.controller("SnackController", function($scope, $cordovaCamera) {
    
    $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
 
});