$(document).ready(function(){
	$(".menuImg").css({
		width: '0px',
		height: '0px'
	});

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
			x = Math.round(3.3 * radius * Math.cos(radians) + (radius/3));
          	y = Math.round(3.3 * radius * Math.sin(radians) + (radius/3));
        }else if(index == 1){
        	x = Math.round(3.3 * radius * Math.cos(radians) + (radius/1.75));
          	y = Math.round(3.3 * radius * Math.sin(radians) + (radius/1.95));
        }else if(index == 2){
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
        console.log("("+ x + ", " + y + ")\n" + "angle: " + angle + "\n" + "step: " + step + 
        	"\n" + "index: " + index + "\nradius: " + radius + "\ncos: " + cos + "\nsin: "+ sin);
	});

	$('#menuSource').mouseenter(function(){
		$('.menuImg').animate(
			{
			height: '85px',
			width: '85px'
			}, 
			100
			);
	});				
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
