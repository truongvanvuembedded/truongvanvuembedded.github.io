(function(){
	emailjs.init("__Y8LjMgSbMzHMt52"); // key c?a b?n
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
	e.preventDefault();

	emailjs.sendForm(
		"service_z20b7al",
		"template_a6j55ij",
		this
	).then(function() {
		alert("Message sent successfully!");
	}, function(error) {
		alert("Failed to send message!");
		console.log(error);
	});
});
