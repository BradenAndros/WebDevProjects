//Check off specific todos by clicking
//modify on() method to listen for clicks on LI inside of UL
//this will let us check off dynamically user-added todos -->
//(because parent UL exists on page load)
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//same thing here...
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event) {
	//enter was pressed
	if (event.which === 13) {
		//take text out of the input
		var todoText = ($(this).val());

		//reset input
		$(this).val("");

		//make new LI which we add at the end of the UL

		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");

		

	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});