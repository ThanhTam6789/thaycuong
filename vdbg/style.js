$(function(){
    setTimeout(function(){
        $('#load').animate({'margin-left':'-200px','margin-top':'0'},0).fadeOut('fast',function(){
            $('#screen').fadeOut(100,function(){
				$('#background_video').fadeOut(30000,function(){
					$('#myModal').reveal({ 
						 animation: 'fadeAndPop',                   //fade, fadeAndPop, none 
						 animationspeed: 300,                       //how fast animtions are 
						 closeonbackgroundclick: true,              //if you click background will modal close? 
						 dismissmodalclass: 'close-reveal-modal'    //the class of a button or element that will close an open modal 
					})
				})
			})
        })
    },4000)
					//Hiding snowfall 
					$(document).ready(function() 
								{                
					$('a.close-reveal-modal').click(function() {$(document);}); 
								}); 
								
								$(function() { 
					
					// Setting Animation            

					//Revealing Snowfall 
					$(document).snowfall({deviceorientation : true, round : true, minSize: 1, maxSize:8,  flakeCount : 250}); 
					});
})
