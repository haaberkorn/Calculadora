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
const numeroBoton = document.getElementById("numeroBoton");
let numeroBotonDos = document.getElementById("numeroBotonDos");
let numeroBotonMas = document.getElementById("numeroBotonMas");
let numeroBotonIgual = document.getElementById("numeroBotonIgual");
let general = document.getElementById("general");
let guardar = ""

general.addEventListener("click", (e)=>{
    /* console.dir(e.target.textContent); */
    /* Con esto podemos saber  donde hemos hecho click en el contenedor padre */
    /* console.log(e.target.textContent); */
    if(e.target.textContent == 1){
        console.log("Esto es un 1")
    }
})




/* const calculadora = () =>{ 

    numeroBoton.onclick = () =>{        
        if((operacionInput.value === "") || (operacionInput.value != "") ){
            operacionInput.value += numeroBoton.innerText;
            console.log(`${operacionInput.value}`)
    }
}  
    numeroBotonDos.onclick = () =>{
        if((operacionInput.value === "") || (operacionInput.value != "") ){
            operacionInput.value += numeroBotonDos.innerText;
            console.log(`${operacionInput.value}`)
}
}
    numeroBotonMas.onclick = () =>{
        if((operacionInput.value != "") ){
            operacionInput.value = `${numeroBoton.value} + ${numeroBotonDos.value}`
            operacionInput.value = guardar
            console.log(operacionInput.value)
}
}
    numeroBotonIgual.onclick = () =>{
        operacionInput.value += `${guardar}`
        console.log(`${guardar}`)
}
}

general.addEventListener("click", calculadora) */

/* numeroBoton.addEventListener("click", () =>{
    if((operacionInput.value === "") || (operacionInput.value != "") ){
        operacionInput.value += numeroBoton.innerText;
    }else if(numeroBotonMas != false){
        operacionInput.value = numeroBotonMas.innerText;
        console.log(`Se presiono el +`);
    }else{
        console.log("hay que ver que es esto")
    }
})

numeroBotonDos.addEventListener("click", () =>{
    if(operacionInput.value === ""){
        operacionInput.value += numeroBotonDos.innerText;
    }else{
        operacionInput.value += numeroBotonDos.innerText;
    }
})

 */
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