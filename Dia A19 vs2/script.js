const html = document.querySelector('html');
const button = document.querySelector('.btn');
const minutos_ht = document.querySelector('.minutos');
const segundos_ht = document.querySelector('.segundos');
const hora_ht = document.querySelector('.hora');
const mes_ht = document.querySelector('.mes');
const dia_ht = document.querySelector('.dia');
const num_ht = document.querySelector('.num');
const relogio = document.querySelector('.relogio');

button.addEventListener('click', () => {
    html.classList.toggle('dark');
    if(html.classList.contains('dark')) {
        button.innerHTML = 'Light mode'
    } else {
        button.innerHTML = 'Dark mode'
    }    
});

function meuRelogio() {
    const d = new Date();
    const horas = d.getHours();
    const minutos = d.getMinutes();
    const segundos = d.getSeconds();
    const meses = d.getMonth();
    const dia = d.getDate();
    const dia_s = d.getDay();
    hora_ht.style = `transform: rotate(${scale(horas, 0, 23, 0, 360)}deg);`;
    minutos_ht.style = `transform: translate(-20%, -25%) rotate(${scale(minutos, 0, 59, 0, 360)}deg);`;
    segundos_ht.style = `transform: translate(-20%, -30%) rotate(${scale(segundos, 0, 59, 0, 360)}deg);`;
    relogio.innerHTML = `&nbsp${horas}:${minutos < 10 ? `0${minutos}` : minutos}`
    let todos_meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    let dias_semanas = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];

    num_ht.innerHTML = `&nbsp${dia}`;
    dia_ht.innerHTML = `&nbsp${dias_semanas[dia_s]}`
    mes_ht.innerHTML = `&nbspde ${todos_meses[meses]}`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

meuRelogio();

setInterval(meuRelogio, 1000)