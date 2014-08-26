//Variables

//Been to
darkroom = true;

//Item Variables
lantern = false;

//Current Room
currentroom= "n_darkroom";

$(document).ready(function() {
	$("form").submit(function(){
		var input = $("#command_line").val();
		
		if (input == "help") {
			$("message_help").clone().insertBefore("#placeholder").fadeIn(1000);
		}
		
		//$("#command_line").val("");
		
	});
});