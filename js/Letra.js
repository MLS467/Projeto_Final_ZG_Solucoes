class Cancao {

    // CONSTRUÇÃO DA MÚSICA
    constructor(nome, cantor, duracao, animais, movimentos) {
        this.nome = nome;
        this.cantor = cantor;
        this.duracao = duracao;
        this.destino = document.body;
        this.letra = this.divLetra(animais, movimentos);
    }

    // CONSTRUÇÃO DA LETRA

    divLetra = (animais) => {
        let divLetra = document.createElement("div");
        divLetra.setAttribute("id", "letra");
        divLetra.prepend(this.refrao());
        divLetra.append(this.Animais(animais.animal1, animais.animal2));
        divLetra.append(this.Animais(animais.animal3, animais.animal4));
        divLetra.append(this.Animais(animais.animal5, animais.animal6));


        this.destino.prepend(divLetra);
    }



    refrao = () => {
        let refrao = document.createElement("div");
        refrao.setAttribute("class", "partes")
        refrao.innerHTML =
            `
       <p> Erguei as mãos e dai glória a Deus</p>
       <p>  Erguei as mãos e dai glória a Deus</p>
       <p> Erguei as mãos</p>
       <p>  E cantai como os filhos do Senhor</p>
        
        `;
        return refrao;
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










}

export { Cancao };