	$('.menu ul').hide();

	$('.menu h2').click(function(){
		$('.menu ul').slideUp();
		if(!$(this).next().is(':visible'))
		{
			$(this).next().slideDown();
		}
	})