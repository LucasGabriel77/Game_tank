

let somMouseOver = new Audio('./sounds/click_menu.mp3');
somMouseOver.volume = 0.3
let elemento = document.getElementById("play");
elemento.addEventListener('mouseover', function() {
    somMouseOver.play();
});
let elemento1 = document.getElementById("manual");
elemento1.addEventListener('mouseover', function() {
    somMouseOver.play();
});
