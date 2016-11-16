 app =  angular.module('Myapp',['ui.router','ngAnimate'])
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('index');
		
		$stateProvider.state('firstz',{
			url:'/index',
			templateUrl:'fan/firstz.html'
			
		})
		.state('express',{
			url:'/press',
			templateUrl:'fan/express.html',
			controller:'excontroller'
		})
		.state('my',{
			url:'/my',
			templateUrl:'fan/my.html'
		})
		
	})
	
	
	
	

