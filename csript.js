document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can add more complex logic)
    if (email === '' || password === '') {
        document.getElementById('message').innerText = 'Please fill in both fields.';
    } else {
        document.getElementById('message').innerText = 'Logging in...';
        // Here you could send email and password to the server for validation
        // For example, using fetch API or XMLHttpRequest
        console.log('Email:', email, 'Password:', password);
    }
});