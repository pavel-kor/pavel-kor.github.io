window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuLink = document.querySelectorAll('.menu_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})