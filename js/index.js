import { EstruturaCancao } from "./Letra.js";
import { config, Movimentos, configBtn } from "./config.js";
import { tema } from "./tema.js";
import { controlaLetra } from "./letraSinc.js";

const Cancao = new EstruturaCancao
    (
        config.nomeCanco,
        config.nomeCantor,
        config.duracao,
        config.Animais,
        Movimentos
    );

let controleDeRepro = false;
let controlePause = false;
let audioControles = document.getElementById("audio");

document.getElementById("btnTema").addEventListener("click", (evt) => {
    tema();
})

document.getElementById("btn").addEventListener("click", (evt) => {
    if (!controleDeRepro) {
        resetarTudo();
        iniciar();
        controlaLetra(configBtn.play);
        controleDeRepro = true;
    }
})

document.getElementById("btnPause").addEventListener("click", (evt) => {
    if (!controlePause) {
        audioControles.pause()
        controlePause = true;
    } else {
        audioControles.play();
        controlePause = false;
    }

})

document.getElementById("btnParar").addEventListener("click", (evt) => {
    if (controleDeRepro) {
        resetarTudo();
        controleDeRepro = false;
        controlePause = false;
    }
});


document.getElementById('btnPI').addEventListener('click', (evt) => {
    if (!controleDeRepro) {
        controlaLetra(configBtn.PI);
        iniciar();
        controleDeRepro = true;
    }
});

document.getElementById('btnPF').addEventListener('click', (evt) => {
    if (!controleDeRepro) {
        controlaLetra(configBtn.PF);
        iniciar();
        controleDeRepro = true;
    }
})


audioControles.addEventListener('timeupdate', (evt) => {
    controlaLetra(configBtn.timeupdate);
});

audioControles.addEventListener('ended', (evt) => {
    resetarTudo();
    controleDeRepro = false;
});

function iniciar() {
    audioControles.play();
}

function resetarTudo() {
    audioControles.currentTime = 0;
    audioControles.load();

}