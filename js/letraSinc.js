let paragrafos = document.getElementsByTagName("p");
console.log(paragrafos)
const tempo =
{
    0: { inicio: 22, fim: 25 },
    1: { inicio: 25, fim: 28 },
    2: { inicio: 29, fim: 31 },
    3: { inicio: 31, fim: 37 },
    4: { inicio: 37, fim: 42 },
    5: { inicio: 42, fim: 45 },
    6: { inicio: 45, fim: 47 },
    7: { inicio: 47, fim: 51 },
    8: { inicio: 51, fim: 55 },
    9: { inicio: 55, fim: 59 },
    10: { inicio: 59, fim: 61 },
    11: { inicio: 61, fim: 65 },
    12: { inicio: 65, fim: 69 },
    13: { inicio: 69, fim: 73 },
    14: { inicio: 73, fim: 75 },
    15: { inicio: 75, fim: 80 },
    16: { inicio: 80, fim: 83 },
    17: { inicio: 83, fim: 86 },
    18: { inicio: 86, fim: 88 },
    19: { inicio: 88, fim: 93 },
    20: { inicio: 93, fim: 96 },
    21: { inicio: 96, fim: 99 },
    22: { inicio: 99, fim: 102 },
    23: { inicio: 102, fim: 104 },
    24: { inicio: 104, fim: 111 },
    25: { inicio: 111, fim: 114 },
    26: { inicio: 114, fim: 118 },
    27: { inicio: 118, fim: 120 },
    28: { inicio: 120, fim: 126 },
    29: { inicio: 126, fim: 130 },
    30: { inicio: 130, fim: 132 },
    31: { inicio: 132, fim: 136 },
    32: { inicio: 136, fim: 138 },
    33: { inicio: 138, fim: 140 },
    34: { inicio: 140, fim: 144 },
    35: { inicio: 144, fim: 147 },
    36: { inicio: 147, fim: 150 },
    37: { inicio: 150, fim: 153 },
    38: { inicio: 153, fim: 155 },
    39: { inicio: 155, fim: 157 },
    40: { inicio: 157, fim: 160 },
    41: { inicio: 160, fim: 164 },
    42: { inicio: 164, fim: 167 },
    43: { inicio: 167, fim: 169 },
    44: { inicio: 169, fim: 172 },
    45: { inicio: 172, fim: 175 },
    46: { inicio: 175, fim: 179 },
    47: { inicio: 179, fim: 182 },
    48: { inicio: 182, fim: 185 },
    49: { inicio: 185, fim: 188 },
    50: { inicio: 188, fim: 191 },
    51: { inicio: 191, fim: 195 },
    52: { inicio: 195, fim: 198 },
    53: { inicio: 198, fim: 201 },
    54: { inicio: 201, fim: 204 },
    55: { inicio: 204, fim: 207 },
    56: { inicio: 207, fim: 211 },
    57: { inicio: 211, fim: 214 },
    58: { inicio: 214, fim: 219 },
    59: { inicio: 219, fim: 222 },
    60: { inicio: 222, fim: 225 },
    61: { inicio: 225, fim: 229 },
    62: { inicio: 229, fim: 231 },
    63: { inicio: 231, fim: 237 },
    64: { inicio: 237, fim: 240 },
    65: { inicio: 240, fim: 243 },
    66: { inicio: 243, fim: 246 },
    67: { inicio: 246, fim: 248 },
    68: { inicio: 248, fim: 253 },
    69: { inicio: 253, fim: 257 },
    70: { inicio: 257, fim: 260 },
    71: { inicio: 260, fim: 263 },
    72: { inicio: 263, fim: 265 },
    73: { inicio: 265, fim: 270 }
}

let iniciou = true;
let contagem = null;
let controle = null;
let primeiraParte = null;
let play = true;
function controlaLetra(param) {
    console.log(param);
    play = param.play;

    if (param.pf) {
        iniciou = true;
    }

    if (play) {
        iniciou = true;
        play = false;
    }

    if (iniciou) {
        contagem = param.contagem;
        controle = param.controle;
        iniciou = param.iniciou;
        audio.currentTime = param.currentTime;
        primeiraParte = param.primeiraParte;
    }

    const tempoAtual = Math.floor(audio.currentTime);

    if (primeiraParte && tempoAtual == 140) {
        audio.pause();
        audio.currentTime = 0;
        audio.load();
    }

    if (tempoAtual >= tempo[contagem].inicio && tempoAtual < tempo[contagem].fim) {
        paragrafos[contagem].classList.add('destaque');
        controle = true;
    } else {
        paragrafos[contagem].classList.remove('destaque');
        if (controle) {
            contagem++;
        }
        controle = false;

    }
}

export { paragrafos, controlaLetra, tempo };


