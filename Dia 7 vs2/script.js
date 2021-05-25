const play = document.getElementById('.play');
const backPlay = document.getElementById('.backplay');
const xbox = document.getElementById('.xbox');
const backBox = document.getElementById('.backbox');

hoverPlay()
function hoverPlay() {
    play.style.width = '90vw';
    backPlay.style.width = '90vw'; 
}

hoverXbox()
function hoverXbox() {
    xbox.style.width = '90vw';
    backBox.style.opacity = '90vw';
}