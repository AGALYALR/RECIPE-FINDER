document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('.form-container')[0].style.display = 'none';
    document.querySelectorAll('.form-container')[1].style.display = 'flex';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('.form-container')[1].style.display = 'none';
    document.querySelectorAll('.form-container')[0].style.display = 'flex';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login validation here
    window.location.href = 'index.html';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform signup validation here
    window.location.href = 'index.html';
});
