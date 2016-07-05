$(document).ready(function(){

	// Hide menu elements
	$('.menuImg').hide();

	// Variable declaration and assignment		
	
	var radius = parseInt($('.menuImg').css('width')),
		fields = $(this).find('.menuItem'),
		step = 90/(fields.length + 1),
		angle = 0,
		radians = 0,
		x = 0,
		y = 0,
		mouseFlag = 0,
		tooltipTimer,
		menuTimer;
	
	// Step through each element of class '.menuItem' and execute code for each element
	fields.each(function (index){
		angle = angle + (step);
		radians = angle * (Math.PI/180);
		
		if(index == 0 || index == 3){
			// Calculates positions of first and last elements on the arc
			x = Math.round(3.3 * radius * Math.cos(radians) + (radius/3));
          	y = Math.round(3.3 * radius * Math.sin(radians) + (radius/3));
        }else if(index == 1){
        	// Calculates position of second element on the arc with a position adjustment 
        	x = Math.round(3.3 * radius * Math.cos(radians) + (radius/1.75));
          	y = Math.round(3.3 * radius * Math.sin(radians) + (radius/1.95));
        }else if(index == 2){
        	// Calculates position of third element on the arc with a position adjustment 
        	x = Math.round(3.3 * radius * Math.cos(radians) + (radius/1.95));
          	y = Math.round(3.3 * radius * Math.sin(radians) + (radius/1.75));
        }
          
        // Assign each element it's position
        $(this).css({
        	position: 'absolute',
        	left: x - 100 + 'px',
        	top: y - 100 + 'px'
        });
		console.log(x + " " + y);
		// Assign each child element it's position
		if(index == 0 || index == 1){
	        $(this).children("div").css({
	        	position: 'absolute',
	        	left: 100 + 'px',
	        	top: 32 + 'px'
	        });
	    }else if(index == 2){
	    		$(this).children("div").css({
	        	position: 'absolute',
	        	left: 100 + 'px',
	        	top: 45 + 'px'
	        });
	    }else if(index == 3){
	    		$(this).children("div").css({
	        	position: 'absolute',
	        	left: 80 + 'px',
	        	top: 85 + 'px'
	        });
	    }

        // Hide child element
        $(this).children("div").hide();

	});

	// Bind mouse events to main menu element to show/hide menu items for each event
	$('#menuSource').on({
		mouseenter: function(){
			clearTimeout(menuTimer);
			$('.menuImg').show(100);
		},
		mouseleave: function(){			
			menuTimer = setTimeout("$.fn.hideMenu();", 10000);
		}
	});

	// Bind mouse events to menu elements to show/hide tooltip for each event
	$("#dossier").on({
	    mouseenter: function(){
	    	clearTimeout(tooltipTimer);
	        $('#first').show(100);
	    }, 
	    mouseleave: function(){
	    	$('.tooltip').hide(100);
	        tooltipTimer = setTimeout("$.fn.hideMenu();", 2000);
	    }
	});

	$("#fictionarium").on({
	    mouseenter: function(){
	    	clearTimeout(tooltipTimer);
	        $('#second').show(100);
	    }, 
	    mouseleave: function(){
	    	$('.tooltip').hide(100);
	        tooltipTimer = setTimeout("$.fn.hideMenu();", 2000);
	    }
	});

	$("#plexus").on({
	    mouseenter: function(){
	    	clearTimeout(tooltipTimer);
	        $('#third').show(100);
	    }, 
	    mouseleave: function(){
	    	$('.tooltip').hide(100);
	        tooltipTimer = setTimeout("$.fn.hideMenu();", 2000);
	    }
	});

	$("#squibs").on({
	    mouseenter: function(){
	    	clearTimeout(tooltipTimer);
	        $('#fourth').show(100);
	    }, 
	    mouseleave: function(){
	    	$('.tooltip').hide(100);
	        tooltipTimer = setTimeout("$.fn.hideMenu();", 2000);
	    }
	});

	jQuery.fn.extend({
		hideMenu: function(){
			$('.tooltip').hide(100);
			$('.menuImg').clearQueue();
			$('.menuImg').delay(100).hide(100);
		}
	});
});