function sumir() {
    var somiu = document.getElementById("esc");
    somiu.style.visibility = "hidden";
}
function aparecer() {
    var apareceu = document.getElementById("esc");
    apareceu.style.visibility = "visible";
}
function cript() {
    let insira = document.getElementById("texto").value;
    let cifra = document.getElementById("cifra").checked;
    let b64 = document.getElementById("b64").checked;
    var num = parseInt(document.getElementById("esc").value)


    var letras = []

    if (cifra == true) {
        var teste = 0
        var formulario = document.getElementById("texto").value;
        for (let i = 0; i < formulario.length; i++) {
            teste = (formulario[i].charCodeAt())
            if (teste <= 65 || teste >= 123) {
                letras.push(String.fromCharCode(teste));
            }
            else {
                letras.push(String.fromCharCode(teste + num));
            }
        }
        document.getElementById("resposta").value = letras.join("");

    }

    if (b64 == true) {
        var form = document.getElementById("texto").value;
        let b64 = btoa(form);
        document.getElementById("resposta").value = b64;
    }
}

function descript() {
    let insira = document.getElementById("texto").value;
    let cifra = document.getElementById("cifra").checked;
    let b64 = document.getElementById("b64").checked;
    var num = parseInt(document.getElementById("esc").value)


    var letras = []

    if (cifra == true) {
        var teste = 0
        var formulario = document.getElementById("texto").value;
        for (let i = 0; i < formulario.length; i++) {
            teste = (formulario[i].charCodeAt())
            if (teste <= 65 || teste >= 123) {
                letras.push(String.fromCharCode(teste));
            }
            else {
                letras.push(String.fromCharCode(teste - num));
            }
        }
        document.getElementById("resposta").value = letras.join("");

    }


    if (b64 == true)
        var form = document.getElementById("texto").value;
    let b46 = atob(form);
    document.getElementById("resposta").value = b46;
}