angular.module('infoService', [])

	.factory('Infos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/infos');
			},
			create : function(infoData) {
				return $http.post('/api/infos', infoData);
			},
			delete : function(id) {
				return $http.delete('/api/infos/' + id);
			}
		}
	}]);
