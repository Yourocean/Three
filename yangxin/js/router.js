angular.module('myapp',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('log');
	$stateProvider.state('log',{
		url:'/log',
		templateUrl:'template/log.html'
	})
})
