function OcultarMostrar(){
    var rec1 = document.querySelector("#rectangulo1")
    var rec2 = document.querySelector("#rectangulo2")
    if(rec1.style.display == "block"){
        rec1.style.display = "none";
    }
    else{
        rec1.style.display = "block";   
    }

    if(rec2.style.display == "none"){
        rec2.style.display = "block";
    } 
    else{
        rec2.style.display = "none";
    }
    
    final = rec1.style.display = "none"
    final = rec2.style.display = "block"
}

function encriptar(){

    let frase = [];
    let texto = document.querySelector("#textoIngresado").value.toLowerCase();

    for (var posicion = 0; posicion < texto.length; posicion++) {
        if (texto[posicion] == "a") {
            frase[posicion] = "ai";
        } else if (texto[posicion] == "e") {
            frase[posicion] = "enter";
        } else if (texto[posicion] == "i") {
            frase[posicion] = "imes";
        } else if (texto[posicion] == "o") {
            frase[posicion] = "ober";
        } else if (texto[posicion] == "u") {
            frase[posicion] = "ufat";
        } else{
            frase[posicion] = texto[posicion];
        }
    }
    document.querySelector("#textoResuelto").innerText = "";
    document.querySelector("#textoResuelto").innerText = frase.join("");
    OcultarMostrar();

}

function desencriptar() {
    let texto = document.getElementById("textoIngresado").value.toLowerCase();

    let textoDesencriptado = texto.replace(/ai/igm, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/igm, "e")
    textoDesencriptado = textoDesencriptado.replace(/imes/igm, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/igm, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/igm, "u");
    document.getElementById("textoResuelto").innerText = "";
    document.getElementById("textoResuelto").innerText = textoDesencriptado;
}

function copiar() {
    const mensaje = document.querySelector("#textoResuelto");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
    alert ("Texto Copiado");

}