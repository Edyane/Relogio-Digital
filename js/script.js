const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (horas < 10) horas = '0' + horas;

    if (minutos < 10) minutos = '0' + minutos;

    if (segundos < 10) segundos = '0' + segundos;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})