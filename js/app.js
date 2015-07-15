var App = angular.module('App', ['ngRoute', 'controller', 'service']);

App.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})

	.otherwise({redirectTo: '/'});
});