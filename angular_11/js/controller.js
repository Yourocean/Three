	app.controller('excontroller',['$scope',function($scope){
		
		$scope.times = false;
		$scope.lis = true;
		$scope.index = null;
		
		$scope.click1 = function(item){
			$scope.index = item;
			$scope.times = false;
			$scope.lis = true;
			
		}
		$scope.click1(1);
		$scope.click2 = function(item){
			$scope.index = item;
			$scope.times = true;
			$scope.lis = false;
			
		}
		
	}])