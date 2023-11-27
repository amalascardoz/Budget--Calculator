// register.js

// Function to handle register button click
function register() {
    // Get username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Perform basic validation (you should implement stronger validation on the server)
    if (username === "" || password === "" || confirmPassword === "") {
        alert("Username, password, and confirm password are required");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Send the registration information to the server for processing
    // This is where you would typically make an AJAX request to the server
    // and handle the registration logic on the server side.
    // For simplicity, we'll just display an alert indicating success.
    alert("Registration successful! Redirecting to login page...");
    
    // Redirect to the login page after successful registration
    window.location.href = 'login.html';
}
