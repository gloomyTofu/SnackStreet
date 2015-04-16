// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var snackApp = angular.module('starter', ['ionic', 'ngResource', 'ngCordova', 'starter.controllers'])

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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
    })
    .state('app.camera', {
    url: "/camera",
    views: {
      'menuContent': {
        templateUrl: "templates/camera.html"
      }
    }
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
      views: {
        'menuContent': {
          templateUrl: "templates/guides/laos.html",
          controller: 'LaosCtrl'
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
          templateUrl: "templates/purchase.html",
          controller: 'PurchaseCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/guides/laos');
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
.factory('Dish', ['$resource',
  function($resource){
    return $resource('dishes/:dishId.json', {}, {
      query: {method:'GET', params:{dishId:'dishes'}, isArray:true}
    });
}])
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