// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA button click
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Starting your free trial! (Demo mode)');
});

// Plan buttons click
document.querySelectorAll('.plan-button').forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.parentElement.querySelector('h3').textContent;
        alert(`You selected the ${plan} plan! (Demo mode)`);
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

const elementsToAnimate = [
    document.querySelector('.hero-content'),
    ...document.querySelectorAll('.feature'),
    ...document.querySelectorAll('.testimonial'),
    ...document.querySelectorAll('.plan')
];

elementsToAnimate.forEach(element => observer.observe(element));

// Add some modern interactivity - parallax effect on hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});