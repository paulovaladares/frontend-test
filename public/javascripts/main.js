	var app = angular.module('myApp', []);
	app.controller('fazenda', function($scope, $http) {
  $http.get("fazenda.json")
  .success(function (response) {$scope.names = response;});
});
