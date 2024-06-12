class Cancao {

    // CONSTRUÇÃO DA MÚSICA
    constructor(nome, cantor, duracao, animais, movimentos) {
        this.nome = nome;
        this.cantor = cantor;
        this.duracao = duracao;
        this.destino = document.body;
        this.movimentos = movimentos;
        this.divCancao = null;
        this.letra = this.divLetra(animais);
    }

    // CONSTRUÇÃO DA LETRA

    divLetra = (animais) => {
        let divLetra = document.createElement("div");
        divLetra.setAttribute("id", "letra");
        this.divCancao = divLetra;

        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        h1.innerHTML = this.nome;
        h2.innerHTML = this.cantor;

        divLetra.prepend(h1);
        divLetra.append(h2);

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
            this.movimentos[0],
            this.movimentos[1]));

        divLetra.append(this.adicionaMov(
            this.movimentos[0],
            this.movimentos[1],
            this.movimentos[2]));

        divLetra.append(this.adicionaMov(
            this.movimentos[0],
            this.movimentos[1],
            this.movimentos[2],
            this.movimentos[3]));

        divLetra.append(this.adicionaMov(
            this.movimentos[0],
            this.movimentos[1],
            this.movimentos[2],
            this.movimentos[3],
            this.movimentos[4]));

        divLetra.append(this.adicionaMov(
            this.movimentos[0],
            this.movimentos[1],
            this.movimentos[2],
            this.movimentos[3],
            this.movimentos[4],
            this.movimentos[5]));

        divLetra.append(this.adicionaMov(
            this.movimentos[0],
            this.movimentos[1],
            this.movimentos[2],
            this.movimentos[3],
            this.movimentos[4],
            this.movimentos[5],
            this.movimentos[6],
        ));

        divLetra.append(this.adicionaMov(
            this.movimentos[0],
            this.movimentos[1],
            this.movimentos[2],
            this.movimentos[3],
            this.movimentos[4],
            this.movimentos[5],
            this.movimentos[6],
            this.movimentos[7]
        ));
        this.destino.prepend(divLetra);
    }

    Animais = (animal1, animal2) => {
        let animais = document.createElement("div");
        animais.setAttribute("class", "partes")
        animais.innerHTML =
            `
       <p> Os animaizinhos subiram de dois em dois</p>
       <p> Os animaizinhos subiram de dois em dois</p>
       <p> O ${animal1}</p>
       <p> E os ${animal2}, como os filhos do Senhor</p>
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
                break;
        }

        return partesLetra;
    }

    adicionaMov = (...vet) => {
        let divMov = document.createElement("div");
        let paragrafo = document.createElement("p");
        console.log(vet);
        if (vet.length == 1) {

            paragrafo.innerHTML = vet[0];
            divMov.append(paragrafo);
            divMov.append(this.partes(4));
            this.divCancao.append(divMov);

        } else if (vet.length > 1) {

            vet.map(elementos =>
                paragrafo.innerHTML += `${elementos}, `);
            divMov.append(paragrafo);
            if (vet.length < 7)
                divMov.append(this.partes(4));
            this.divCancao.append(divMov);

        }
    }


    repeteTrecho = (trecho, vezes) => {
        for (let index = 0; index < vezes; index++) {
            this.divCancao.append(this.partes(trecho));
        }
    }

}

export { Cancao };