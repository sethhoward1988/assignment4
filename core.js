$(document).ready(function()	{
	$(":text, #name, #address, #phone, #email").after("<span>*</span>");

	$("#form").submit(function(event) {
		var isValid = true;
		var name = $("#name").val();
		var phone = $("#phone").val();
		
		if (name.length == 0) {
			// name field is empty
			$("name").addClass('requred');
			isValid = false;
		} else if (phone.length == 0 || phone.length != 10) {
			// phone is empty or not exactly 10 digits long
			$("name").addClass('requred');
			isValid = false;
		}

		if (isValid == false) { 
			event.preventDefault(); // Prevent form from submitting
		}
	});
	
	$("#phone").keyup(function(evt) {
		var phoneValue = $("#phone").val();
		if(phoneValue.length != 10){
			// Phone length is not 10, add an error class and style it
			$("#phone").addClass('error');
		} else {
			// Phone length is exactly 10, add a validated class to let the user know
			$("#phone").addClass('validated');
		}
	});
});		
