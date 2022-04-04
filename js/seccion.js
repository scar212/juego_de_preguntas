let containerprincipal = document.querySelector(".container-principal");
let containerParticipante = document.querySelector(".container-participante");
let containerIntroduccion = document.querySelector(".container-introduccion");
let botonPrincipal = document.querySelector(".boton-juego-1");
let botonParticipante = document.querySelector(".boton-participante");
let botonPlay = document.querySelector(".image-002")
let datoNombre = document.getElementById("campo-nombre");
let nombre = document.getElementById("p-nombre");
let containerCategorias = document.querySelector(".container-categoria");
const pattern= new RegExp('^[A-Z]+$', 'i');
/*boton.onclick = function(){
      containerprincipal.style.display = "none";
      containerParticipante.style.display = "block";
}*/
const empezar = ()=> {
    containerprincipal.style.setProperty("display", "none");
    containerParticipante.style.setProperty("display", "block");
}
const agregarNombre = ()=> {
    containerParticipante.style.setProperty("display", "none");
    nombre.innerHTML = datoNombre.value;
}
const validacion = ()=>{
    if(datoNombre.value.length == 0){
        alert("Introduce tu nombre, el campo correspondiente no puede estar vacío")
    }else if(!pattern.test(datoNombre.value)){
        alert("No puedes introducir números");
    }else{
        containerParticipante.style.setProperty("display", "none");
        containerIntroduccion.style.setProperty("display", "block");
        nombre.innerHTML = datoNombre.value + "!";
    }
}
const eleccion = ()=>{
    containerIntroduccion.style.setProperty("display", "none");
    containerCategorias.style.setProperty("display", "block");
}
botonPrincipal.onclick = function(){
    empezar();
}
botonParticipante.onclick = function(){
    validacion();
}
botonPlay.onclick = function(){
    eleccion();
}

let eleccionHistoria = document.getElementById("catg-historia");
let eleccionMatematicas = document.getElementById("catg-matematicas");
let gPH = document.querySelector(".grupo-preguntas-historia");
let gPM = document.querySelector(".grupo-preguntas-matematicas");
let botonEnviarH = document.querySelector(".boton-enviar-h");
let botonEnviarM = document.querySelector(".boton-enviar-m");
let c1rh1 = document.getElementById("texto-pregunta-historia-1");
let c1rh2 = document.getElementById("texto-pregunta-historia-2");
let c1rh3 = document.getElementById("texto-pregunta-historia-3");
let c1rm1 = document.getElementById("texto-pregunta-matematicas-1");
let c1rm2 = document.getElementById("texto-pregunta-matematicas-2");
let c1rm3 = document.getElementById("texto-pregunta-matematicas-3");
let containerResultado = document.querySelector(".container-respuesta");
let texto = document.getElementById("texto-respuesta");

eleccionHistoria.onclick = function(){
    containerCategorias.style.setProperty("display", "none");
    gPH.style.setProperty("display", "block");
}

eleccionMatematicas.onclick = function(){
    containerCategorias.style.setProperty("display", "none");
    gPM.style.setProperty("display", "block");
}

const evaluacionRespuestaH = ()=>{
    if(c1rh1.value == "c" && c1rh2.value == "c" && c1rh3.value == "b"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres un genio!, acertaste las 3 preguntas.";
    }else if(c1rh1.value == "c" && c1rh2.value == "c" && c1rh3.value != "b"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres bueno!, acertaste 2 preguntas.";
    }else if(c1rh1.value == "c" && c1rh2.value != "c" && c1rh3.value == "b"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres bueno!, acertaste 2 preguntas.";
    }else if(c1rh1.value != "c" && c1rh2.value == "c" && c1rh3.value == "b"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres bueno!, acertaste 2 preguntas.";
    }else if(c1rh1.value != "c" && c1rh2.value != "c" && c1rh3.value == "b"){
       containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>Te recomiendo que estudies, acertaste 1 pregunta.";
    }else if(c1rh1.value == "c" && c1rh2.value != "c" && c1rh3.value != "b"){
       containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>Te recomiendo que estudies, acertaste 1 pregunta.";
    }else if(c1rh1.value != "c" && c1rh2.value == "c" && c1rh3.value != "b"){
       containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>Te recomiendo que estudies, acertaste 1 pregunta.";
    }else if(c1rh1.value != "c" && c1rh2.value != "c" && c1rh3.value != "b"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres bruto!, no acertaste ninguna pregunta.";
    }
}

const evaluacionRespuestaM = ()=>{
    if(c1rm1.value == "a" && c1rm2.value == "c" && c1rm3.value == "c"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres un genio!, acertaste las 3 preguntas.";
    }else if(c1rm1.value == "a" && c1rm2.value == "c" && c1rm3.value != "c"){
       containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres bueno!, acertaste 2 preguntas.";
    }else if(c1rm1.value == "a" && c1rm2.value != "c" && c1rm3.value == "c"){
       containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres bueno!, acertaste 2 preguntas.";
    }else if(c1rm1.value != "a" && c1rm2.value == "c" && c1rm3.value == "c"){
       containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres bueno!, acertaste 2 preguntas.";
    }else if(c1rm1.value != "a" && c1rm2.value != "c" && c1rm3.value == "c"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>Te recomiendo que estudies, acertaste 1 pregunta.";
    }else if(c1rm1.value == "a" && c1rm2.value != "c" && c1rm3.value != "c"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>Te recomiendo que estudies, acertaste 1 pregunta.";
    }else if(c1rm1.value != "a" && c1rm2.value == "c" && c1rm3.value != "c"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>Te recomiendo que estudies, acertaste 1 pregunta.";
    }else if(c1rm1.value != "a" && c1rm2.value != "c" && c1rm3.value != "c"){
        containerResultado.style.setProperty("display", "block");
        texto.innerHTML = "¡" + datoNombre.value + "!" + "<br>¡Eres bruto!, no acertaste ninguna pregunta.";
    }
}
botonEnviarH.onclick = function(){
    if(gPH.style.display = "block"){
        if(c1rh1.value.length > 1){
        alert("No puedes ingresar más de una letra");
        }else  if(c1rh2.value.length > 1){
        alert("No puedes ingresar más de una letra");
        } else  if(c1rh3.value.length > 1){
            alert("No puedes ingresar más de una letra");
        }else {
        evaluacionRespuestaH();
        gPH.style.setProperty("display", "none");
        }
    }
}
botonEnviarM.onclick = function(){
    if(gPM.style.display = "block"){
        if(c1rm1.value.length > 1){
        alert("No puedes ingresar más de una letra");
        }else  if(c1rm2.value.length > 1){
        alert("No puedes ingresar más de una letra");
        } else  if(c1rm3.value.length > 1){
            alert("No puedes ingresar más de una letra");
        }else {
        evaluacionRespuestaM();
        gPM.style.setProperty("display", "none");
        }
    }
}