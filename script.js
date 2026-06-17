
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU NAVIGATION TOGGLE
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    if (navToggle && navMenu) {
        // Toggle active classes on click
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('open');
        });

        // Close menu immediately if a user clicks a section link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('open');
            });
        });
    }

    // 2. FRICTIONLESS ACCESSIBLE FORM VALIDATION
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents page reload during testing

            // Grab form inputs to ensure data capture works cleanly
            const name = document.getElementById('clientName').value.trim();
            const phone = document.getElementById('clientPhone').value.trim();
            const service = document.getElementById('serviceType').value;

            if (!name || !phone || !service) {
                alert('Please fill out all mandatory fields.');
                return;
            }

            // Client Visual Feedback Mockup
            // (When deploying to production, this is where we point to Formspree/Netlify APIs)
            alert(`Success! Thank you, ${name}. Your request for the plan option has been simulated. In production, this form triggers a direct email straight to the business owner.`);
            
            bookingForm.reset();
        });
    }
});