var app = angular.module('webapp', ['ngMaterial', 'ngMessages', 'ngResource']);

  app.controller('DemoCtrl', ['$scope', '$http', function($scope, $http, $resource) {

    $scope.view = {};
      // use $http or $resource
      // https://api.punkapi.com/v2/beers

    $http({
      method: 'GET',
      url: 'https://api.punkapi.com/v2/beers'
    }).then(function successCallback(response) {
        $scope.view.results = response.data;
      }, function errorCallback(response) {
        console.log("Error",response);
    });
  }
  ]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});
