/* Operadores */
let botonSumar = document.getElementById("botonSumar");
let botonRestar = document.getElementById("botonRestar");
let botonMultiplicar = document.getElementById("botonMultiplicar");
let botonDividir = document.getElementById("botonDividir");
let botonIgual = document.getElementById("botonIgual");
let botonClear = document.getElementById("botonClear");
let operacionInput = document.getElementById("operacionInput");

/* Numeros */
/* let numeroUno = document.getElementById("numeroUno"); */
let numeroBoton = document.getElementById("numeroBoton");
let numeroBotonDos = document.getElementById("numeroBotonDos");
let numeroBotonMas = document.getElementById("numeroBotonMas");

const calculadora = () =>{
    if(botonIgual === false){
        numeroBoton();
    }
numeroBoton.addEventListener("click", () =>{
    if(operacionInput.value === ""){
        operacionInput.value += numeroBoton.innerText;
    }else{
        operacionInput.value += numeroBoton.innerText;
    }
})
}
botonIgual.addEventListener("click", calculadora)

/* numeroBotonDos.addEventListener("click", () =>{
    operacionInput.value = numeroBotonDos.innerText;
})
numeroBotonMas.addEventListener("click", () =>{
    operacionInput.value = numeroBotonMas.innerText;
}) */
/* const calculadora = () =>{
    numeroUno.onclick = "document.getElementById('operacionInput').value = '1'";
    numeroDos.innerText = "2"; 
    botonSumar = "+";  
    botonSumar.onclick = () =>{
        if(botonSumar = true){
            
        }else{
            console.log("el boton es false");
        }
    }
    console.log(`El resultado del boton fue ${eval.botonSumar}`)
    
}
botonIgual.addEventListener("click", calculadora) */

/* const calculadora = () =>{
    operacionInput.value = numeroUno.value

}
numeroUno.addEventListener("click", calculadora);
 */