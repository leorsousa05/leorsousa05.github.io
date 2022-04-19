const menu = document.querySelector('#menu');
const nav = document.querySelector('.links-menu');

menu.addEventListener('click', function(event) {
    event.preventDefault()
    nav.classList.toggle('aberto');
    if( nav.classList.contains("aberto")) {
        menu.innerHTML = "Fechar &#x2715";
    } else {
        menu.innerHTML = "Menu &equiv;";
    }
});