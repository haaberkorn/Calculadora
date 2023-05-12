/* Operadores */
let botonSumar = document.getElementById("botonSumar");
let botonRestar = document.getElementById("botonRestar");
let botonMultiplicar = document.getElementById("botonMultiplicar");
let botonDividir = document.getElementById("botonDividir");
let botonIgual = document.getElementById("botonIgual");
let botonClear = document.getElementById("botonClear");
let operacionInput = document.getElementById("operacionInput");

/* Numeros */
let numeroUno = document.getElementById("numeroUno");
let numeroDos = document.getElementById("numeroDos");

const calculadora = () =>{
    numeroUno.innerText = "1";
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
botonIgual.addEventListener("click", calculadora)