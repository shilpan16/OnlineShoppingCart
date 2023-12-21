function registerUser() {
    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple form validation
    if (!username || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Send a request to the server for registration (simulate with a setTimeout)
    simulateRegistration(username, password);
}

function simulateRegistration(username, password) {
    // Simulate a server request with a delay
    setTimeout(function () {
        // For simplicity, let's assume registration is successful
        alert("Registration successful!");

        // Redirect to the main page
        window.location.href = 'index.html';

        // In a real scenario, you would likely want to send the data to a server
        // using AJAX (e.g., fetch API or XMLHttpRequest) and handle the response.
        // Additionally, you would hash and securely store passwords on the server.
    }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
}
