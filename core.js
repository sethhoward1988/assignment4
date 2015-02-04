$(document).ready(function()	{
	$(":text, #name, #address, #phone, #email").after("<span>*</span>");
	$("#form").submit(
		function(event)	{
			var isValid = true;
			var name = $("#name").val();
			if (name.length == 0) {
				$("#name, #address").next().text("Required");
				isValid = false;
			} else {
				$("#name, #address").next().text("");}
			if (isValid == false) { event.preventDefault(); }
	$("#phone").keyup(function() {
	$("#form").submit(
		function(event) {
			var isValid = true;
			var phone = $("#phone").val();	
			});
		});
	});	
});		