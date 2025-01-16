const menuIcon = document.querySelector('.list-menu-button');
const menuMobile = document.querySelector('.menu-mobile');
const closeBtn = document.querySelector('.btn-fechar');

menuIcon.addEventListener('click', () => {
    menuMobile.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    menuMobile.classList.remove('open');
});
