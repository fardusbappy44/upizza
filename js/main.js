(function ($){

'use strict'

//code start

$('.res-icon i.fa-bars').on('click',function(){

	$('.res-icon i.fa-times').show();
	$(this).hide();
 
});

$('.res-icon i.fa-times').on('click',function(){

	$('.res-icon i.fa-bars').show();
	$(this).hide();
 
});

$('.res-icon i.fa-bars').on('click',function(){

	$('.res-nav').animate({
		left:0
	},500)
});

$('.res-icon i.fa-times').on('click',function(){

	$('.res-nav').animate({
		left:-215
	},300)
})

$('.nevigation ul li a').on('click', function(){
  	$('.sub-list').slideUp();
    $(this).siblings('.sub-list').slideDown();
    $('.blank').hide();
    $(this).parent('li').children('.blank').show();
});

$('.blank').on('click', function(){
    $('.sub-list').slideUp();
    $(this).hide();
    });

$('.res-nav ul li a').on('click', function(){
  	$('.sub-list').slideUp();
    $(this).siblings('.sub-list').slideDown();
    $('.blank-1').hide();
    $(this).parent('li').children('.blank-1').show();
});

$('.blank-1').on('click', function(){
    $('.sub-list').slideUp();
    $(this).hide();
    });



}) (jQuery);