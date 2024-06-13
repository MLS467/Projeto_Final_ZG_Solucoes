let dark = `<link id="dark" rel="stylesheet" href="../css/dark.css"></link>`;
let light = `<link id="light" rel="stylesheet" href="../css/index.css"></link>`;
let head = document.head;
let controle = true;
head.innerHTML = light;

function tema() {

    let btnTema = document.getElementsByTagName("btnTema");

    if (!controle) {
        head.innerHTML = light;
        let img = document.createElement("img");
        img.setAttribute("src", "../img/dark.png");
        btnTema.innerHTML = img;
        controle = true;
    } else {
        head.innerHTML = dark;
        btnTema = "";
        let img = document.createElement("img");
        img.setAttribute("src", "../img/light.png");
        btnTema.innerHTML = img;
        controle = false;
    }
}

export { tema }