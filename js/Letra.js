class EstruturaCancao {

    // CONSTRUÇÃO DA MÚSICA
    constructor(nome, cantor, duracao, animais, movimentos) {
        this.nome = nome;
        this.cantor = cantor;
        this.duracao = duracao;
        this.destino = document.getElementById("main");
        this.movimentos = movimentos;
        this.divCancao = null;
        this.letra = this.divLetra(animais);
        this.btnTema = null;
    }

    // CONSTRUÇÃO DA LETRA

    divLetra = (animais) => {
        let divLetra = document.createElement("div");

        let imagem = document.createElement("div");
        imagem.setAttribute("id", "imagem");

        let botoes = document.createElement("div");
        botoes.setAttribute("id", "botoes");

        let img = document.createElement("img");
        img.setAttribute("src", "../img/padre-marcelo-rossi-l.webp")
        img.setAttribute("id", "img");
        divLetra.prepend(img);

        //  CRIANDO BOTOES
        let divBotoes = document.createElement("div");
        divBotoes.setAttribute("id", "divbotoes");

        let btnPlay = document.createElement("button")
        btnPlay.setAttribute("class", "btn");
        btnPlay.setAttribute("id", "btn");
        btnPlay.setAttribute("title", "Play");
        let imgPlay = this.adcImagem("../img/play.png");
        imgPlay.setAttribute("class", "icon");
        btnPlay.append(imgPlay);
        divBotoes.prepend(btnPlay);

        let btnPause = document.createElement("button")
        btnPause.setAttribute("class", "btn");
        btnPause.setAttribute("id", "btnPause");
        btnPause.setAttribute("title", "Pause");
        let imgPause = this.adcImagem("../img/pause.png");
        imgPause.setAttribute("class", "icon");
        btnPause.append(imgPause);
        divBotoes.append(btnPause);

        let btnParar = document.createElement("button")
        btnParar.setAttribute("class", "btn");
        btnParar.setAttribute("id", "btnParar");
        btnParar.setAttribute("title", "Parar");
        let imgParar = this.adcImagem("../img/parar.png");
        imgParar.setAttribute("class", "icon");
        btnParar.append(imgParar);
        divBotoes.append(btnParar);

        let btnParteInicial = document.createElement("button")
        btnParteInicial.setAttribute("class", "btn");
        btnParteInicial.setAttribute("id", "btnPI");
        let imgParteInicial = this.adcImagem("../img/um.png");
        imgParteInicial.setAttribute("class", "icon");
        btnParteInicial.append(imgParteInicial);
        divBotoes.append(btnParteInicial);

        let btnParteFinal = document.createElement("button")
        btnParteFinal.setAttribute("class", "btn");
        btnParteFinal.setAttribute("id", "btnPF");
        let imgParteFinal = this.adcImagem("../img/dois.png");
        imgParteFinal.setAttribute("class", "icon");
        btnParteFinal.append(imgParteFinal);
        divBotoes.append(btnParteFinal);

        let tema = document.createElement("button");
        let imgLight = document.createElement("img");
        imgLight.setAttribute("src", "../img/dark.png");
        imgLight.setAttribute("class", "icon");
        tema.setAttribute("class", "btn");
        tema.setAttribute("id", "btnTema");
        tema.append(imgLight);
        this.btnTema = tema;
        divBotoes.append(tema);

        let divAudio = document.createElement("div");
        divAudio.setAttribute("id", "divAudio");
        let audio = document.createElement("audio");
        audio.setAttribute("id", "audio");
        audio.setAttribute("controls", true);
        audio.setAttribute("src", "../audio/Padre Marcelo Rossi - Erguei as Mãos (Ao Vivo).mp3");
        divAudio.append(audio);
        botoes.prepend(divBotoes);
        botoes.append(divAudio);
        this.destino.append(botoes);

        divLetra.setAttribute("id", "letra");
        this.divCancao = divLetra;

        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        h1.innerHTML = this.nome;
        h2.innerHTML = this.cantor;
        imagem.prepend(h1);
        imagem.append(img);
        imagem.append(h2);
        divLetra.prepend(imagem);


        divLetra.append(this.partes(0));
        divLetra.append(this.Animais(animais.animal1, animais.animal2));
        divLetra.append(this.Animais(animais.animal3, animais.animal4));
        divLetra.append(this.Animais(animais.animal5, animais.animal6));
        divLetra.append(this.partes(1));
        divLetra.append(this.partes(2));
        this.repeteTrecho(0, 3);
        divLetra.append(this.partes(3));
        divLetra.append(this.partes(4));

        divLetra.append(this.adicionaMov(this.movimentos[0]))

        divLetra.append(this.adicionaMov(
            this.movimentos[0], this.movimentos[1]
        ));

        divLetra.append(this.adicionaMov(
            this.movimentos[0], this.movimentos[1], this.movimentos[2]));

        divLetra.append(this.adicionaMov(this.movimentos[0], this.movimentos[1],
            this.movimentos[2],
            this.movimentos[3]));

        divLetra.append(this.adicionaMov(this.movimentos[0], this.movimentos[1],
            this.movimentos[2],
            this.movimentos[3],
            this.movimentos[4]));

        divLetra.append(this.adicionaMov(this.movimentos[0], this.movimentos[1],
            this.movimentos[2],
            this.movimentos[3],
            this.movimentos[4],
            this.movimentos[5]));

        divLetra.append(this.adicionaMov(this.movimentos[0], this.movimentos[1], this.movimentos[2],
            this.movimentos[3],
            this.movimentos[4],
            this.movimentos[5],
            this.movimentos[6],
        ));

        divLetra.append(this.adicionaMov(this.movimentos[0], this.movimentos[1], this.movimentos[2],
            this.movimentos[3],
            this.movimentos[4],
            this.movimentos[5],
            this.movimentos[6],
            this.movimentos[7]
        ));

        this.destino.prepend(divLetra);
    }

    Animais = (animal1, animal2) => {
        let sexoAnimal1 = animal1.charAt(animal1.length - 1);
        let plural = animal2.charAt(animal2.length - 1);
        let animais = document.createElement("div");
        animais.setAttribute("class", "partes")
        animais.innerHTML =
            `
       <p> Os animaizinhos subiram de dois em dois</p>
       <p> Os animaizinhos subiram de dois em dois</p>
       <p> ${sexoAnimal1 == "a" ? "A" : "O"} ${animal1}</p>
       <p> E ${plural == "s" ? "os" : "o"} ${animal2}, como os filhos do Senhor</p>
        `
        return animais;
    }

    partes = (parte) => {
        let partesLetra = document.createElement("div");
        partesLetra.setAttribute("class", "partes")

        switch (parte) {

            case 0:
                partesLetra.innerHTML = `
                <p> Erguei as mãos e dai glória a Deus</p>
                <p>  Erguei as mãos e dai glória a Deus</p>
                <p> Erguei as mãos</p>
                <p>  E cantai como os filhos do Senhor</p>
                 `;
                break;

            case 1:
                partesLetra.innerHTML =
                    `
                <p>Deus disse a Noé: Constrói uma arca</p>
                <p>Deus disse a Noé: Constrói uma arca</p>
                <p>Que seja feita</p>
                <p>De madeira para os filhos do Senhor</p>
                `;
                break;

            case 2:
                partesLetra.innerHTML =
                    `<p>Por isso...!</p>`;
                break;

            case 3:
                partesLetra.innerHTML =
                    `<p>E atenção agora, porque</p>`;
                break;

            case 4:
                partesLetra.innerHTML =
                    `<p>O senhor tem muitos filhos</p>
                        <p>Muitos filhos ele tem</p>
                        <p>Eu sou um deles, você também</p>
                       <p>Louvemos ao senhor</p>`;
                break;

            default:
                partesLetra.innerHTML = '';
                break;
        }

        return partesLetra;
    }

    adicionaMov = (...vet) => {
        let divMov = document.createElement("div");
        let paragrafo = document.createElement("p");
        if (vet.length == 1) {
            paragrafo.innerHTML = vet[0];
            divMov.append(paragrafo);
            divMov.append(this.partes(4));
            this.divCancao.append(divMov);
            return '';

        } else if (vet.length > 1) {

            vet.map((elementos, i) => {

                if (i != vet.length - 1) {
                    paragrafo.innerHTML += `${elementos}, `
                } else {
                    paragrafo.innerHTML += `${elementos}`
                }
            }
            );

            divMov.append(paragrafo);
            if (vet.length <= 7)
                divMov.appendChild(this.partes(4));

            this.divCancao.appendChild(divMov);
            return '';
        }

    }

    repeteTrecho = (trecho, vezes) => {
        for (let index = 0; index < vezes; index++) {
            this.divCancao.append(this.partes(trecho));
        }
    }

    adcImagem = (caminho) => {
        let img = document.createElement("img")
        img.setAttribute("src", caminho);

        return img;
    }

}

export { EstruturaCancao };