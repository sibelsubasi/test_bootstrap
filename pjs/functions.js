jQuery( document ).ready( function($) {
	$('#login-link').click(function(e){
		if( $('#login-holder .the-form').hasClass('active') ) {
			$('#login-holder .the-form').removeClass('active');
		} else {
			$('#login-holder .the-form').addClass('active');
		}
	});
});
jQuery(window).load(function(){
	jQuery('#sub-menu').css('height', ''+jQuery('#content-top').innerHeight()+'');
	jQuery('.slide-block').each(function(){
		jQuery(this).css('height', ''+jQuery('#content-top').innerHeight()+'');
	});
});
