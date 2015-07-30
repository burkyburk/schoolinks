angular.module('infoController', [])

	.controller('mainController', ['$scope','$http','Infos', function($scope, $http, Infos) {
		$scope.formData = {};
		$scope.loading = true;


		Infos.get()
			.success(function(data) {
				$scope.infos = data;
				$scope.loading = false;
			});


		$scope.createInfo = function() {

			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				Infos.create($scope.formData)

					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {};
						$scope.infos = data;
					});
			}
		};


		$scope.deleteInfo = function(id) {
			$scope.loading = true;

			Infos.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.infos = data; 
				});
		};
	}]);
