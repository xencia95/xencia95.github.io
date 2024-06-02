document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
        'Diseñador',
        'Ilustrador',
        
    ];

    let index = 0;
    const typeAnimation = document.querySelector('.type-animation');

    function typeNextPhrase() {
        typeAnimation.textContent = '';
        typeAnimation.textContent = phrases[index];
        index = (index + 1) % phrases.length;
    }

    setInterval(typeNextPhrase, 2000);

    const fadeInElements = document.querySelectorAll('.fade-in');

    fadeInElements.forEach(element => {
        const delay = parseFloat(element.getAttribute('data-delay'));
        const duration = parseFloat(element.getAttribute('data-duration'));

        element.style.opacity = 0;
        element.style.transition = `opacity ${duration}s ease ${delay}s`;

        setTimeout(() => {
            element.style.opacity = 1;
        }, 100);
    });
});
