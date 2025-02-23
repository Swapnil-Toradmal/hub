// Simple form validation (can be enhanced)
function sendToWhatsApp() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;
			if (!name || !email || !message) {
				alert("Please fill out all fields.");
				event.preventDefault();
			} else {
				alert("Message sent successfully!");
			}

            var whatsappURL = "https://wa.link/82o7pj";
            var text = "Hello! My Name: " + name + "%0AEmail: " + email + "%0AMessage: " + message;

            // Open WhatsApp with the pre-filled message
            window.open("https://wa.me/9975757365?text=" + text, "_blank");
        }
;
        
   
