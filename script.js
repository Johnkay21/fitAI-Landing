document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Starting your free trial! (Demo mode)');
});

document.querySelectorAll('.plan-button').forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.parentElement.querySelector('h3').textContent;
        alert(`You Selected the ${plan} plan! (Demo mode)`);
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible')
        }
    });
}, { threshold: 0.5 });

const elementsToAnimate = [
    document.querySelector('.hero-content'),
    ...document.querySelectorAll('.feature'),
    ...document.querySelectorAll('.testimonial'),
    ...document.querySelectorAll('.plan')
];

elementsToAnimate.forEach(element => observer.observe(element));