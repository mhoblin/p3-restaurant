$('.menu ul').hide();

$('.menu h2').click(function(){
	$('.menu ul').slideUp();
	if(!$(this).next().is(':visible')){ 
		$(this).next().slideDown();
			}
});


//hide the plate color text
$('.menu ul li:nth-of-type(1)').hide();


//change color of icons on hover

	//address
$('div.contact div.row:nth-of-type(1)').on('mouseenter', function() {
	$('div.contact div.row:nth-of-type(1) i.icon').removeClass('grey');
	$('div.contact div.row:nth-of-type(1) i.icon').addClass('red');
	$('div.contact div.row:nth-of-type(1) p').css({
      'color': 'red',
	});


})
    .on('mouseleave', function() {
    $('div.contact div.row:nth-of-type(1) i.icon').addClass('grey');
    $('div.contact div.row:nth-of-type(1) i.icon').removeClass('red');
   	$('div.contact div.row:nth-of-type(1) p').css({
      'color': 'black',
	});
   });

    //phone
$('div.contact div.row:nth-of-type(2)').on('mouseenter', function() {
	$('div.contact div.row:nth-of-type(2) i.icon').removeClass('grey');
	$('div.contact div.row:nth-of-type(2) i.icon').addClass('red');
	$('div.contact div.row:nth-of-type(2) p').css({
      'color': 'red',
	});


})
    .on('mouseleave', function() {
    $('div.contact div.row:nth-of-type(2) i.icon').addClass('grey');
    $('div.contact div.row:nth-of-type(2) i.icon').removeClass('red');
   	$('div.contact div.row:nth-of-type(2) p').css({
      'color': 'black',
	});
   });

    //email
$('div.contact div.row:nth-of-type(3)').on('mouseenter', function() {
	$('div.contact div.row:nth-of-type(3) i.icon').removeClass('grey');
	$('div.contact div.row:nth-of-type(3) i.icon').addClass('red');
	$('div.contact div.row:nth-of-type(3) p').css({
      'color': 'red',
	});


})
    .on('mouseleave', function() {
    $('div.contact div.row:nth-of-type(3) i.icon').addClass('grey');
    $('div.contact div.row:nth-of-type(3) i.icon').removeClass('red');
   	$('div.contact div.row:nth-of-type(3) p').css({
      'color': 'black',
	});
   });

//lightbox for reservation form
$('#reservation').click(function() {
	$('.basic:not([id="item menu"])').modal('show');
});

$('#submit').click(function() {
	$('.basic:not([id="item menu"])').modal('hide');
});


