
$(document).ready(function() {

	$(function() {
// Animations
let $animation_elements = $('.slideInLeft, .zoomIn, .fadeInUp');
let $window = $(window);

//detect scroll position
function check_if_in_view() {
	let window_height = $window.height();
	let window_top_position = $window.scrollTop();
	let window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function() {
		let $element = $(this);
		let element_height = $element.outerHeight();
		let element_top_position = $element.offset().top;
		let element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
    	(element_top_position <= window_bottom_position)) {
    	$element.addClass('in-view');
} else {
	$element.removeClass('in-view');
}
});
}

$window.on('scroll resize', check_if_in_view);
// triggers any elements that need to be animated and are within the viewport on DOM load
$window.trigger('scroll');
});



//Parallax Scrolling
$(function() {
	$('section[data-type="background"]').each(function(){
		let $scroll = $(this);

		$(window).scroll(function() {                           
			let yPos = -($window.scrollTop() / $scroll.data('speed'));
        // background position
        let coords = '50% '+ yPos + 'px';
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
});	


$(function() {
	$('a[href*="#section"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			let target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});	

// Contact Form
$(function() {
	$('.error').hide();
	$('.send').click(function() {
		$('.error').hide();
		let name = $("input#Contactname").val();
		if (name === "") {
			$("label#name_error").show();
			$("input#Contactname").focus();
			return false;
		}
		let email = $("input#email").val();
		if (email === "") {
			$("label#email_error").show();
			$("input#email").focus();
			return false;
		}
		let message = $("textarea#message").val();
		if (message === "") {
			$("label#message_error").show();
			$("textarea#message").focus();
			return false;
		}
		let dataString = 'Contactname='+ name + '&email=' + email + '&message=' + message;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: dataString,
			success: function() {
				$('#CTwrapper').html("<div id='confirmed'></div>");
				$('#confirmed').html("<div style='margin-top: 200px; font-size: 30px; font-style:italic; color: #00FF00;'>Thank you!</div>")
				.hide()
				.fadeIn(1500);
			}
		});
		return false;                                     
	});
});


});
