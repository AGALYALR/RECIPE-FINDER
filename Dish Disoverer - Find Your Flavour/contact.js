document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can add form validation and submit logic here
    alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);

    // Reset the form
    document.getElementById('contactForm').reset();
});
