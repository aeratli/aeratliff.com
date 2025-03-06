function submitToAPI(e) {
	e.preventDefault();
	var URL = "https://api.aeratliff.com/dev/MailForwardSES";

	var affiliationregex = /[A-Za-z]{1}[A-Za-z]/;
	if (!affiliationregex.test($("#affiliation").val())) {
		 alert ("Please enter a valid affilition longer than 2 characters.");
		return;
	}
	var nameregex = /[A-Za-z]{1}[A-Za-z]/;
	if (!nameregex.test($("#name").val())) {
		alert ("Please enter a valid name longer than 2 characters.");
		return;
	}
	var phoneregex = /[0-9]{10}/;
	if (!phoneregex.test($("#phone").val())) {
		alert ("Please enter valid 10 digit phone number.");
		return;
	}
	if ($("#email").val()=="") {
		alert ("Please enter your email address.");
		return;
	}
	var emailregex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
	if (!emailregex.test($("#email").val())) {
		alert ("Please enter valid email address in the format: account@domain.tld");
		return;
	}
	if ($("#subject").val()=="") {
		alert ("Please enter a subject.");
		return;
	}
	if ($("#message").val()=="") {
		alert ("Please enter a message.");
		return;
	}

	var affiliation = $("#affiliation").val();
	var name = $("#name").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var contactmethod = $("#contactmethod").val();
	var subject = $("#subject").val();
	var message = $("#message").val();
	
	var data = {
		affiliation : affiliation,
		name : name,
		phone : phone,
		email : email,
		contactmethod : contactmethod,
		subject : subject,
		message : message
	};

	$.ajax({
		type: "POST",
		url : "https://api.aeratliff.com/dev/MailForwardSES",
		dataType: "json",
		crossDomain: "true",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(data),

		success: function () {
			alert("Your message was successfully submitted!  Please allow 1-2 business days for review of your message.");
			document.getElementById("contact").reset();
			location.reload();
		},
		error: function () {
		alert("There was a problem submitting your message!  Please try again in a different browser or disable your script blocker.  If you are still experiencing issues, e-mail directly to anthony@aeratliff.com.");
		}
	});
}