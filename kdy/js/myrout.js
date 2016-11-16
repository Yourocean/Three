myapp.config(function($stateProvider,$urlRouterProvider){
		
		$urlRouterProvider.otherwise('index');
		
		$stateProvider.state('login',{
			url:'/index',
			templateUrl:'template/login.html'
		})
		
		$stateProvider.state('register',{
			url:'/register',
			templateUrl:'template/register.html',
			controller:'registerController'
		})
	})