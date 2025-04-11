
 // Get references to the elements
    const loginText = document.getElementById('login-text');
    const loginForm = document.getElementById('loginForm');

    // Add click event listener to the login text
    loginText.addEventListener('click', function() {
        // Toggle the display of the login form
        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
        } else {
            loginForm.style.display = 'none';
        }
    });
