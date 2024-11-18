// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('open');
});
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card');
    let delay = 0;

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, delay);
        delay += 300; // Delay each card's appearance
    });
});



const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const mouseX = e.clientX - card.offsetLeft;
        const mouseY = e.clientY - card.offsetTop;

        // Calculate tilt based on mouse position
        const tiltX = (mouseY / cardHeight - 0.5) * 10; // Adjust the factor for tilt
        const tiltY = (mouseX / cardWidth - 0.5) * -10;

        // Apply tilt effect
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Reset tilt
    });
});