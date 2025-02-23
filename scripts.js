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

    var whatsappURL = "https://wa.link/ijezpz"; // Updated WhatsApp link
    var phoneNumber = "919975756365"; // Updated phone number
    var text = "Hello! My Name: " + name + "%0AEmail: " + email + "%0AMessage: " + message;

    // Open WhatsApp with the pre-filled message
    window.open("https://wa.me/" + phoneNumber + "?text=" + text, "_blank");
}
