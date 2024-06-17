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


document.getElementById("btnTema").addEventListener("click", (evt) => {
    tema();
})

document.getElementById("btn").addEventListener("click", (evt) => {
    resetarTudo();
    configLetra = {
        iniciou: true,
        contagem: 0,
        controle: false,
        primeiraParte: false,
        currentTime: 0,
        pf: false,
        play: true
    }
    iniciar();
    controlaLetra(configLetra);
})

document.getElementById("btnPause").addEventListener("click", pausar)

document.getElementById("btnParar").addEventListener("click", (evt) => {
    configLetra = {
        iniciou: false,
        contagem: 0,
        controle: false,
        currentTime: 0,
        primeiraParte: false,
        pf: false,
        play: false
    }
    resetarTudo();
});

document.getElementById('btnPI').addEventListener('click', (evt) => {
    configLetra = {
        iniciou: false,
        contagem: 0,
        controle: false,
        currentTime: 0,
        primeiraParte: true,
        pf: true,
        play: false
    }
    controlaLetra(configLetra);
    iniciar();


});

document.getElementById('btnPF').addEventListener('click', (evt) => {

    configLetra = {
        iniciou: false,
        contagem: 33,
        controle: false,
        currentTime: 138,
        primeiraParte: false,
        pf: true,
        play: false
    }
    iniciar();
    controlaLetra(configLetra);


})


audioControles.addEventListener('timeupdate', (evt) => {

    configLetra = {
        iniciou: false,
        contagem: 0,
        controle: false,
        currentTime: 0,
        pf: false,
        play: false
    }
    controlaLetra(configLetra);
});

audioControles.addEventListener('ended', (evt) => { resetarTudo() });

function iniciar() {
    audioControles.play();
}

function pausar() {
    audioControles.pause();
}

function resetarTudo() {
    audioControles.currentTime = 0;
    audioControles.load();

}