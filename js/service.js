// GRuQ6GAMk-jeNEDInx-Voz8KgnN17cd7
var App = angular.module('service', []);

App.factory('DB', function($http){
	return {
		read: function(){
			var url = URL('cr', null);
			return $http.get(url);
		},
		create: function(task){
			var url = URL('cr', null);
			return $http.post(url, task);
		},
		profile: function(task){
			var url = URL('upd', task._id.$oid);
			return $http.get(url);	
		},
		update: function(task){
			var url = URL('upd', task._id.$oid);
			return $http.put(url, task);	
		},
		delete: function(task){
			var url = URL('upd', task._id.$oid);
			return $http.delete(url);		
		}
	}
});


function URL(opt, id){
	var url = 'https://api.mongolab.com/api/1/databases/beer-artesanal/collections/tasks';
	switch(opt){
		case 'cr': {
			return url+'?apiKey=p_Dzz9AVJT9HtU0QjPB-a7qlg9cDb3Cs';
		};
		break;
		case 'upd': {
			return url+"/"+id+"?apiKey=p_Dzz9AVJT9HtU0QjPB-a7qlg9cDb3Cs";
		} 
	}
}

//https://api.mongolab.com/api/1/databases/beer-artesanal?apiKey=p_Dzz9AVJT9HtU0QjPB-a7qlg9cDb3Cs