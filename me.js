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

/*restof buttons*/

// GSAP animation example
gsap.to(".card", {
    duration: 0.5,
    scale: 1.1,
    ease: "power2.out",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#f0f0f0",
    stagger: 0.1,
    onComplete: function() {
        // Animation complete actions
    }
});

/*HOME js*/

  // Example: JavaScript for scroll animations
  window.addEventListener('scroll', () => {
    const heroText = document.querySelector('.hero-text');
    const sectionTitles = document.querySelectorAll('.section-title');
    const cards = document.querySelectorAll('.card');

    // Example animation on scroll
    if (isElementInViewport(heroText)) {
        heroText.classList.add('animate__slideInDown'); // Example CSS animation class
    }

    sectionTitles.forEach(title => {
        if (isElementInViewport(title)) {
            title.classList.add('animate__fadeInUp'); // Example CSS animation class
        }
    });

    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('animate__zoomIn'); // Example CSS animation class
        }
    });
});

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}