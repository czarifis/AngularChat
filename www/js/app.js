// Ionic Starter App
var NUMBER_OF_MESSAGES = 100;

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {

    var myDiv = document.getElementById("panel");
    var $oldDigest = $rootScope.$digest;
    var $newDigest = function() {
      console.time("$digest");
      $oldDigest.apply($rootScope);
      console.timeEnd("$digest");
      myDiv.scrollTop = myDiv.scrollHeight;
    };
    $rootScope.$digest = $newDigest;

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('imcontroller', ['$scope', function($scope) {
    $scope.data = [
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sender: 'Yannis Papakonstantinou',
        avatar: 'assets/img/yannis.jpg',
        position: 'left'
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sender: 'Costas Zarifis',
        avatar: 'assets/img/costas.jpg',
        position: 'right'
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sender: 'Yannis Papakonstantinou',
        avatar: 'assets/img/yannis.jpg',
        position: 'left'
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sender: 'Costas Zarifis',
        avatar: 'assets/img/costas.jpg',
        position: 'right'
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sender: 'Yannis Papakonstantinou',
        avatar: 'assets/img/yannis.jpg',
        position: 'left'
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sender: 'Costas Zarifis',
        avatar: 'assets/img/costas.jpg',
        position: 'right'
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sender: 'Yannis Papakonstantinou',
        avatar: 'assets/img/yannis.jpg',
        position: 'left'
      }

    ];

    for (var i = 0; i<NUMBER_OF_MESSAGES/2; i++) {
      $scope.data.push({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sender: 'Yannis Papakonstantinou',
        avatar: 'assets/img/yannis.jpg',
        position: 'left'
      });
      $scope.data.push({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sender: 'Costas Zarifis',
        avatar: 'assets/img/costas.jpg',
        position: 'right'
      });
    }

    $scope.newmessage = '';


    $scope.sendMessage = function() {
      var d = {
        avatar : 'assets/img/costas.jpg',
        sender : 'Costas Zarifis',
        position: 'right'
      };
      d.message = $scope.newmessage;
      $scope.data.push(d);


    }
  }]);
