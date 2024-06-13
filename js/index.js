import { Cancao } from "./Letra.js";
import { config } from "./config.js";
import { Movimentos } from "./config.js";
import { tema } from "./tema.js";



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

let audioControles = document.getElementById("audio");

document.getElementById("btn").addEventListener("click", (evt) => {
    audioControles.play();
})

audio.addEventListener('timeupdate', function () {
    console.log(`Tempo atual: ${audio.currentTime.toFixed(2)} segundos`); // Imprime o tempo atual no console
});


