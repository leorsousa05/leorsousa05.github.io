let btn = document.querySelector('#menu-btn')
let menu = document.querySelector('.nav-menu')

btn.addEventListener('click', function(event) {
    event.preventDefault()
    menu.classList.toggle('aberto');
    btn.classList.toggle('fechado')
});

menu.addEventListener('click', function(event) {
    menu.classList.toggle('aberto')
    btn.classList.toggle('fechado')
});