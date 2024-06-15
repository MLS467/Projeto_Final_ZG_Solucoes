import { Cancao } from "./Letra.js";
import { config, Movimentos } from "./config.js";
import { tema } from "./tema.js";
import { paragrafos, tempo } from "./letraSinc.js";

let audioControles = document.getElementById("audio");



const novaCancao = new Cancao
    (
        config.nomeCanco,
        config.nomeCantor,
        config.duracao,
        config.Animais,
        Movimentos
    );


document.getElementById("btnTema").addEventListener("click", (evt) => {
    tema();
})

document.getElementById("btn").addEventListener("click", (evt) => {
    audioControles.play();
})

document.getElementById("btnPause").addEventListener("click", (evt) => {
    audioControles.pause();
})



let contagem = 0;
let controle = false;
audio.addEventListener('timeupdate', function () {
    const tempoAtual = Math.floor(audio.currentTime);

    if (tempoAtual >= tempo[contagem].inicio && tempoAtual < tempo[contagem].fim) {
        paragrafos[contagem].style.color = 'red';
        controle = true;
    } else {
        paragrafos[contagem].style.color = 'white';
        if (controle) {
            contagem++;
        }
        controle = false;
        console.log(contagem);
    }

});


