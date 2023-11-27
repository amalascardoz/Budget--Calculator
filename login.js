// login.js

// Function to handle login button click
function login() {
    // Get username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform basic validation (you should implement stronger validation on the server)
    if (username === "" || password === "") {
        alert("Username and password are required");
        return;
    }

    // Send the login information to the server for authentication
    // This is where you would typically make an AJAX request to the server
    // and handle the authentication logic on the server side.
    // For simplicity, we'll just display an alert indicating success.
    alert("Login successful! Redirecting to home page...");
    
    // Redirect to the home page after successful login
    window.location.href = 'home.html';
}
