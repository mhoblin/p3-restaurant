	$('.menu ul').hide();

	$('.menu h2').click(function(){
		$('.menu ul').slideUp();
		if(!$(this).next().is(':visible'))
		{
			$(this).next().slideDown();
		}
	})

//hide the plate color text
$('.menu ul li:nth-of-type(1)').hide();


