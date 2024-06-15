import { Cancao } from "./Letra.js";
import { config, Movimentos } from "./config.js";
import { tema } from "./tema.js";
import { paragrafos, tempo, controlaLetra } from "./letraSinc.js";

const novaCancao = new Cancao
    (
        config.nomeCanco,
        config.nomeCantor,
        config.duracao,
        config.Animais,
        Movimentos
    );

let audioControles = document.getElementById("audio");


document.getElementById("btnTema").addEventListener("click", (evt) => {
    tema();
    audioControles.addEventListener('timeupdate', controlaLetra);
})


document.getElementById("btn").addEventListener("click", iniciar)

document.getElementById("btnPause").addEventListener("click", pausar)

document.getElementById('btnPI').addEventListener('click', (evt) => {
    let configLetra = {
        iniciou: false,
        contagem: 0,
        controle: false,
        currentTime: 0,
        primeiraParte: true
    }
    iniciar();
    controlaLetra(configLetra);

});

document.getElementById('btnPF').addEventListener('click', (evt) => {

    let configLetra = {
        iniciou: false,
        contagem: 33,
        controle: false,
        currentTime: 138,
        primeiraParte: false
    }
    iniciar();
    controlaLetra(configLetra);
})


audioControles.addEventListener('timeupdate', (evt) => {
    let configLetra = {
        iniciou: false,
        contagem: 0,
        controle: false,
        currentTime: 0
    }
    controlaLetra(configLetra);
});

function iniciar() {
    audioControles.play();
}

function pausar() {
    audioControles.pause();
}