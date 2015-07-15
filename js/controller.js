var App = angular.module('controller',[]);

App.controller('HomeCtrl', function($scope, DB, $route){
	$scope.task = {};
	$scope.create = true;
	$scope.edit = false;

	DB.read().then(function(data){
		$scope.tasks = data.data;
	});

	$scope.deleteTask = function(task){
		DB.delete(task).then(function(data){
			$route.reload();
		});
	}

	$scope.createTask = function(task){
		if(task){
			DB.create(task).then(function(data){
				$route.reload();
			});
		}		
	}

	$scope.editTask = function(task){
		$scope.create = false;
		$scope.edit = true;
		DB.profile(task).then(function(data){
			$scope.task = data.data;
		});
	}

	$scope.updateTask = function(task){
		console.log(task);
		DB.update(task).then(function(data){
			$route.reload();
		});		
	}	
});

