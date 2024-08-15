
const codigos = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptar(texto) {
    let change = texto.toLowerCase();
    if (change !== "") {
        for (let i = 0; i < codigos.length; i++) {
            if (change.includes(codigos[i][0])) {
                change = change.replaceAll(codigos[i][0], codigos[i][1]);
            };
        };
        return change;
    } else {
        alert("Ingrese texto para encriptar");
        location.reload();
    }

}

function desencriptar(texto) {
    let change = texto.toLowerCase();
    if (change !== "") {
        for (let i = 0; i < codigos.length; i++) {
            if (change.includes(codigos[i][1])) {
                change = change.replaceAll(codigos[i][1], codigos[i][0]);
            };
        };
        return change;
    } else {
        alert("Ingrese texto para encriptar");
        location.reload();
    }
}


function ingresoUsuario() {
    let textoEncriptado = document.getElementById("textoResultado");
    let textoUsuario = document.getElementById("textoUsuario").value;
    textoEncriptado.innerHTML = encriptar(textoUsuario);
    console.log(encriptar(textoUsuario));
    document.getElementById("nuneco").style.display = "none";
    document.getElementById("textone").style.display = "none";
    document.getElementById("oculto").style.display = "block";
    document.getElementById("agrearestilo").style.justifyContent = "space-between";
    document.getElementById("textoResultado").style.fontSize = "24px";
    return;
}

function ingresoUsuarioDesencriptar() {
    let textoEncriptado = document.getElementById("textoResultado");
    let textoUsuario = document.getElementById("textoUsuario").value;
    textoEncriptado.innerHTML = desencriptar(textoUsuario);

    document.getElementById("nuneco").style.display = "none";
    document.getElementById("textone").style.display = "none";
    document.getElementById("oculto").style.display = "block";
    document.getElementById("agrearestilo").style.justifyContent = "space-between";
    document.getElementById("textoResultado").style.fontSize = "24px";
    return;
}

function cambiaLaAltura() {
    const texto = document.querySelector(".textoFinal");
    texto.style.height = "auto";
    texto.style.height = texto.scrollHeight + 'px';
}

function copia() {
    let textoUsuario = document.getElementById("textoResultado");
    console.log(textoUsuario);
    navigator.clipboard.writeText(textoUsuario.textContent).then(() => {
        // alert("Texto copiado!");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

function borra() {
    const texto = document.querySelector(".textoFinal");
    texto.value = "";
    texto.placeholder = "";
}