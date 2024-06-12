import { Cancao } from "./Letra.js";
import { config } from "./config.js";
import { Movimentos } from "./config.js";

const novaCancao = new Cancao
    (
        config.nomeCanco,
        config.nomeCantor,
        config.duracao,
        config.Animais,
        Movimentos
    );