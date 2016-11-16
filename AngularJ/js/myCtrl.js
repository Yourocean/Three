app.controller('myController',['$scope',function($scope){
	$scope.disab=function(item){
		alert(item);
		if(typeof item!= 'number'){
			var list=document.getElementById('list');
			console.log(list);
			list.setAttribute('disabled','disabled');
		}
	}
}])