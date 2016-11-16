	app.controller('excontroller',['$scope','$http',function($scope,$http){
			var waybills;
		$http.get('js/waybill.json').success(function(waybill){
			waybills = waybill;
			$scope.waybills = waybill;
		});
		var pickup;
		$http.get('js/pickup.json').success(function(pickup){
			pickups = pickup;
			$scope.pickups = pickup;
		});
		//已取
		
		$scope.$watch('selectpickup',function(newValue,oldValue,scope){
			if(newValue != oldValue){
				var searchp = {};
				for(var o in pickups){
					if(pickups[o].name.indexOf(newValue)>=0){
						searchp[o] = pickups[o];
					}
				}
					$scope.pickups = searchp;
				if(newValue == ''){
					$scope.yin = false;
					}else{
						$scope.yin = true;
					}
			}
		});
		$scope.$watch('telephone',function(newValue,oldValue,scope){
			if(newValue != oldValue){
				var tp = {};
				for(var j in pickups){
					if(pickups[j].phone == newValue){
						tp[j] = pickups[j];
					}
					$scope.pickups = tp;
					$scope.yin = true;
				}
			}
		});
		
			$scope.$watch('searchname',function(newValue,oldValue,scope){
			if(newValue != oldValue){
				var searchvalue = {};
				for(var o in waybills){
					if(waybills[o].name.indexOf(newValue)>=0){
						searchvalue[o] = waybills[o];
					}
				}
				$scope.waybills = searchvalue;
				if(newValue == ''){
					$scope.yin = false;
					}else{
						$scope.yin = true;
					}
			}
			
		});
		
		$scope.$watch('phones',function(newValue,oldValue,scope){
			if(newValue != oldValue){
				var searchphone = {};
				for(var i in waybills){
					if(waybills[i].phone==newValue){
						console.log(waybills[i]);
						
						searchphone[i] = waybills[i];
					}
				}
				$scope.waybills = searchphone;
					$scope.yin = true;
			}
		})

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