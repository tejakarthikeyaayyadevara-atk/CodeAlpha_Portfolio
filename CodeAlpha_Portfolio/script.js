// Function to handle clean form submissions and mock alerts
function handleFormSubmit(event) {
    event.preventDefault(); // Prevents page reload
    
    // Grab input values
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Simple tracking simulation
    console.log(`Tracking form submit from: ${name} (${email})`);

    // Dynamic success alert banner
    alert(`Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`);
    
    // Reset form fields
    form.reset();
}

// Bonus Feature: Navbar highlight tracking on scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.style.color = '#00d2ff'; // Accent neon color
                } else {
                    link.style.color = '#ffffff'; // Default white
                }
            });
        }
    });
});