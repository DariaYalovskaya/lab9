// Скрипт для бургер-меню
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burgerIcon');
    const navMenu = document.getElementById('navMenu');

    burgerIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Обработчики для кнопок в секции "Обо мне"
    const contactButton = document.querySelector('.cta-button[href="#contact"]');
    const achievementsButton = document.querySelector('.cta-button[href="#achievements"]');

    contactButton.addEventListener('click', () => {
        alert('Вы нажали на кнопку "Связаться со мной"');
    });

    achievementsButton.addEventListener('click', () => {
        alert('Вы нажали на кнопку "Перейти далее"');
    });
});
