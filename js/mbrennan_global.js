/*
* Global Javascript Object
* - Runs on DomReady and calls Init function.
* - Written as Object literal for easy modulation of multiple objects per page
*
*
*/

PROPERTY_GURU = function(){

		//global vars
		var _this;

	return{
		init: function(){
			
			/*
			* Init function, set up event handlers and calls to other functions.
			* - example would be set up event handlers for drop down / fly out menus, click events and modals
			*/
			
			
			// maintain the scope of this object so we can always refernece _this
			_this = this;
									
									
			//check if there is a hero module.			
			if($('#pg-mod-hero-carousel').length > 0 ){
				
				//Run the hero Module
				_this.pgHeroCarousel();
					
			}
			
			
			
		},
		
		pgHeroCarousel : function(){
			
			
			/*
			* Carousel Function
			* - uses custom set HTML attributes to allow easy control if module should rotate or show a single slide
			* - doesn't add in any markup dynamically, giving good SEO and accessibility benefits
			* - can take any numumber of slides, simply add more LI's to the markup; eg: generated via database / CMS
			*/
			
			//Grab the elements and let's set it up
			var carousel = $('#pg-mod-hero-carousel');
			//console.log(carousel);
			var slides = carousel.children().find('li')
			//console.log(slides);	
			
			
			//check if this is in rotate mode then get to it!
						
			if(carousel.attr('pg-hero-rotate') == 'true'){
				//rotate the slides												
					
				var slideCount = 0;
				var slidemax = slides.length - 1;
							
				$(slides[slideCount]).show();
							
				var timer = setInterval(function(){
					
					//console.log(slideCount)
					var oldSlide = slideCount;								
					
					if(slideCount < slidemax){
						
						//we're still rotating through any number of slides. Carry on.
						
						slideCount++
						//console.log(slideCount)
						
						$(slides[oldSlide]).fadeOut('slow', function(){
							
							$(slides[slideCount]).fadeIn(function(){
								$(slides[oldSlide]).hide();	
							});
								
						});	
					
					}else{
						
						//at the end of rotation, zero out the count and start again.
						
						slideCount = 0;
						//console.log(oldSlide)												
						$(slides[oldSlide]).fadeOut('slow', function(){
							
							$(slides[slideCount]).fadeIn(function(){
								$(slides[oldSlide]).hide();	
							});
								
						});	
							
					}	
										
					
				}, 5000)
					
					
				
			}else{
				
				//static mode display the slide set by producer
				var whichSlide = carousel.attr('pg-hero-start');												
				//console.log(whichSlide);
				
				$(slides[whichSlide]).fadeIn();
				
				
			}
			
			
		}
		
	}
}();

$(function() {
	PROPERTY_GURU.init();
})
