import { Cancao } from "./Letra.js";
import { config, Movimentos } from "./config.js";
import { tema } from "./tema.js";
import { controlaLetra } from "./letraSinc.js";

const novaCancao = new Cancao
    (
        config.nomeCanco,
        config.nomeCantor,
        config.duracao,
        config.Animais,
        Movimentos
    );
let configLetra = null;
let audioControles = document.getElementById("audio");
let controleBtn = true;

document.getElementById("btnTema").addEventListener("click", (evt) => {
    tema();
})

document.getElementById("btn").addEventListener("click", iniciar)

document.getElementById("btnPause").addEventListener("click", pausar)

document.getElementById("btnParar").addEventListener("click", resetarTudo);

document.getElementById('btnPI').addEventListener('click', (evt) => {


    configLetra = {
        iniciou: false,
        contagem: 0,
        controle: false,
        currentTime: 0,
        primeiraParte: true
    }
    iniciar();
    controlaLetra(configLetra);
    controleBtn = false;


});

document.getElementById('btnPF').addEventListener('click', (evt) => {

    configLetra = {
        iniciou: false,
        contagem: 33,
        controle: false,
        currentTime: 138,
        primeiraParte: false
    }
    iniciar();
    controlaLetra(configLetra);
    controleBtn = false;

})


audioControles.addEventListener('timeupdate', (evt) => {
    configLetra = {
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

function resetarTudo() {
    audioControles.currentTime = 0;
    audioControles.load();
    location.reload();
}