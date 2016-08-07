
$(document).ready(function() {

$(".cruisebox a").click(function(e) {
	$(this).closest(".cruisebox").addClass("cruiseboxLength").find(".hidden").slideToggle();
	 e.preventDefault();
});

$(".quantity").on("change || keyup",function() {
	var price = +$(this).closest(".cruisebox").data("price");
	var quantity = +$(this).val();
	var total = price * quantity;
	$(this).parent().find(".total").text(total.toFixed(2) );
});

$("button").click(function() {
	$(this).text("$" + $(this).closest(".cruisebox").data("price"));

});

$(".holder1").find(".switch").on("change", function() {
	$(".cruisebox:eq(1), .cruisebox:eq(3)").toggleClass("darkened");		
});

$(".holder2").find(".switch").on("change", function() {
	$(".cruisebox:eq(0), .cruisebox:eq(2)").toggleClass("darkened");		
});


});
