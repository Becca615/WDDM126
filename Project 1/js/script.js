document.addEventListener('DOMContentLoaded', () => {
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.borderColor = '#ffccdd');
        card.addEventListener('mouseleave', () => card.style.borderColor = '#d3d3d3');
    });

   
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => alert(`You clicked on ${link.textContent}!`));
    });

    
    const testimonialForm = document.getElementById('testimonialForm');
    if (testimonialForm) {
        testimonialForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('nameInput').value;
            const message = document.getElementById('messageInput').value;

            if (name && message) {
                alert(`Thank you, ${name}! Your testimonial has been submitted.`);
                testimonialForm.reset();
            } else {
                alert('Please fill out both fields before submitting.');
            }
        });
    }
});
