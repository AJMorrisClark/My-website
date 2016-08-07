
//Parallax Scrolling

$('section[data-type="background"]').each(function(){
	var $scroll = $(this);

	$(window).scroll(function() {                           
		var yPos = -($window.scrollTop() / $scroll.data('speed'));

        // background position
        var coords = '50% '+ yPos + 'px';

        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function


$(function() {
	$('a[href*="#section"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
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


	$(function() {
		$('.error').hide();
		$('.send').click(function() {

			$('.error').hide();
			var name = $("input#Contactname").val();
			if (name == "") {
				$("label#name_error").show();
				$("input#Contactname").focus();
				return false;
			}
			var email = $("input#email").val();
			if (email == "") {
				$("label#email_error").show();
				$("input#email").focus();
				return false;
			}
			var message = $("textarea#message").val();
			if (message == "") {
				$("label#message_error").show();
				$("textarea#message").focus();
				return false;
			}

			var dataString = 'Contactname='+ name + '&email=' + email + '&message=' + message;

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







