app.directive('dir',function(){
		return {
			restrict:'AEMC',
			templateUrl:'fan/swiper.html',
			replace:true,
			link:function(scope,element,attrs){
				var swiper = new Swiper('.swiper-container', {
				        pagination: '.swiper-pagination',
				        slidesPerView:1,
				        paginationClickable: true,
				        
				        freeMode: true,
				        nextButton: '.swiper-button-next',
    					prevButton: '.swiper-button-prev',
    					loop:true,
    					autoplay : 1000//轮播时间
				    });	
				    
			   var myScroll= new IScroll('#wrapper',{
					scrollbars: true,
					disableMouse: true,
		    		disablePointer: true,
		    		scrollbars: 'custom'
		}) 
			}
		}
	})