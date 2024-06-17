const config = {
    nomeCanco: "Erguei As Mãos",
    nomeCantor: "Padre Marcelo Rossi",
    duracao: "4:56",

    Animais:
    {
        animal1: "elefante",
        animal2: "passarinhos",
        animal3: "minhoquinha",
        animal4: "pinguins",
        animal5: "canguru",
        animal6: "sapinho",
    },


}

const Movimentos = [
    "braço direito ",
    "braço esquerdo ",
    "perna direita ",
    "perna esquerda ",
    "balança a cabeça ",
    "dá uma voltinha ",
    "dá um pulinho ",
    "abraça o irmão "
]


const configBtn = {
    play: {
        iniciou: true,
        contagem: 0,
        controle: false,
        primeiraParte: false,
        currentTime: 0,
        pf: false,
        play: true
    },

    PI: {
        iniciou: false,
        contagem: 0,
        controle: false,
        currentTime: 0,
        primeiraParte: true,
        pf: true,
        play: false
    },

    PF: {
        iniciou: false,
        contagem: 33,
        controle: false,
        currentTime: 138,
        primeiraParte: false,
        pf: true,
        play: false
    },

    timeupdate: {
        iniciou: false,
        contagem: 0,
        controle: false,
        currentTime: 0,
        pf: false,
        play: false
    }
}


export { config, Movimentos, configBtn };