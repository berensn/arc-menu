
$(document).ready(function(){

	// Sets menuImg element size to 0px, hiding it
	$(".menuImg").css({
		width: '0px',
		height: '0px'
	});

	/*  Variable declaration and assignment
		Radius value assigment multiplication factor of .85 is equal to width of menuImg elements 
		in the mouseenter function. ie it's .85 because the width is 85px
	*/
	var radius = $(this).find('.menuItem').width() * .85,
		fields = $(this).find('.menuItem'),
		step = 90/(fields.length + 1),
		angle = 0,
		radians = 0,
		x = 0,
		y = 0;

	
	fields.each(function (index){
		angle = angle + (step);
		radians = angle * (Math.PI/180);
		
		if(index == 0 || index == 3){
			// Positions first and last elements on the arc
			x = Math.round(3.3 * radius * Math.cos(radians) + (radius/3));
          	y = Math.round(3.3 * radius * Math.sin(radians) + (radius/3));
        }else if(index == 1){
        	// Positions second element on the arc with a position adjustment 
        	x = Math.round(3.3 * radius * Math.cos(radians) + (radius/1.75));
          	y = Math.round(3.3 * radius * Math.sin(radians) + (radius/1.95));
        }else if(index == 2){
        	// Positions third element on the arc with a position adjustment 
        	x = Math.round(3.3 * radius * Math.cos(radians) + (radius/1.95));
          	y = Math.round(3.3 * radius * Math.sin(radians) + (radius/1.75));
        }

        var cos = Math.cos(radians),
        	sin = Math.sin(radians);
        
          	
        $(this).css({
        	position: 'absolute',
        	left: x+200 + 'px',
        	top: y+200 + 'px'
        });

        // Debug Info
        console.log("("+ x + ", " + y + ")\n" + "angle: " + angle + "\n" + "step: " + step + 
        	"\n" + "index: " + index + "\nradius: " + radius + "\ncos: " + cos + "\nsin: "+ sin);
	});

	// Sets size of menuImg class elements to specified px, showing them
	$('#menuSource').mouseenter(function(){
		$('.menuImg').animate(
			{
			height: '85px',
			width: '85px'
			}, 
			100
			);
	});		

	// Sets size of menuImg class elements to 0px, hiding them
	$('#menuSource').mouseleave(function(){
		$('.menuImg').delay(2000).animate(
			{
			height: '0px',
			width: '0px'
			}, 
			100
			);
	});	

});
