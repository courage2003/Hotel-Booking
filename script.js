document.getElementById('login-text').addEventListener('click', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
    }
});