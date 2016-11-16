app = angular.module('myApp',['ui.router']);
	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('stroage');
		$stateProvider.state('stroage',{
			url:"/stroage",
			templateUrl:"view/stroage.html"
		})
		.state('memory',{
			url:"/memory",
			templateUrl:"view/memory.html"
		})
		.state('memory_one',{
			url:"/memory_one",
			templateUrl:"view/memory_one.html"
		})
		.state('home',{
			url:"/home",
			templateUrl:"view/home.html"
		})
		.state('getOut',{
			url:"/getOut",
			templateUrl:"view/getOut.html"
		})
	})
	
