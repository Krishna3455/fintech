// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Add animation on page load for fade-in elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
        el.classList.add('visible');
    });

    // Add animation on page load for slide-in elements
    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach(el => {
        el.classList.add('visible');
    });
});
