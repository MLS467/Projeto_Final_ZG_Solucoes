let dark = `<link id="dark" rel="stylesheet" href="../css/dark.css"></link>`;
let light = `<link id="light" rel="stylesheet" href="../css/index.css"></link>`;
let head = document.head;
let controle = true;
head.innerHTML = light;

function tema() {
    let btnTema = document.getElementById("btnTema");
    let img = document.createElement("img");

    if (!controle) {
        img.setAttribute("src", "../img/dark.png");
        img.setAttribute("class", "icon");
        head.innerHTML = light;
        btnTema.innerHTML = '';
        btnTema.appendChild(img);
        controle = true;
    } else {
        img.setAttribute("src", "../img/light.png");
        img.setAttribute("class", "icon");
        head.innerHTML = dark;
        btnTema.innerHTML = '';
        btnTema.appendChild(img);
        controle = false;
    }
}

export { tema }