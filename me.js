// Example JavaScript for handling form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        // Example: Sending form data to a server
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        // Simulate form submission success
        alert('Message sent successfully!');
        form.reset();
    });
});
