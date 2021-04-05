"use strict";

const lampada = document.getElementById('lamp');
const btnLigar = document.getElementById('turnOn');
const btnDesligar = document.getElementById('turnOff');


function ligarLampada(){
    lampada.src = "img/ligada.jpg";
}

function desligarLampada(){
    lampada.src = "img/desligada.jpg";

}

function quebrarLampada(){
    lampada.src = "img/quebrada.jpg";

    btnLigar.addEventListener('click', quebrarLampada);
    btnDesligar.addEventListener('click', quebrarLampada);
    lampada.addEventListener('mouseenter', quebrarLampada);
    lampada.addEventListener('mouseleave', quebrarLampada);
}


btnLigar.addEventListener('click', ligarLampada);
btnLigar.addEventListener('dblclick', quebrarLampada);

btnDesligar.addEventListener('click', desligarLampada);

lampada.addEventListener('mouseenter', ligarLampada);
lampada.addEventListener('mouseleave', desligarLampada);
lampada.addEventListener('dblclick', quebrarLampada);