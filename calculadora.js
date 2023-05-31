/* Operadores */
const botonSumar = document.getElementById("botonSumar");
const botonRestar = document.getElementById("botonRestar");
const botonMultiplicar = document.getElementById("botonMultiplicar");
const botonDividir = document.getElementById("botonDividir");
const botonIgual = document.getElementById("botonIgual");
const botonClear = document.getElementById("botonClear");
const operacionInput = document.getElementById("operacionInput");

/* Numeros */
/* const numeroUno = document.getElementById("numeroUno"); */
let numeroBoton = document.getElementById("numeroBoton");
const numeroBotonDos = document.getElementById("numeroBotonDos");
const numeroBotonMas = document.getElementById("numeroBotonMas");
const numeroBotonMenos = document.getElementById("numeroBotonMenos");
const numeroBotonIgual = document.getElementById("numeroBotonIgual");
const general = document.getElementById("general");
const keyner = document.getElementById("keyner");
let numeroGeneral = [];


general.addEventListener("click", (e)=>{
    console.dir(e.target);
    /* console.log(numeroArray); */
    /* Con esto podemos saber  donde hemos hecho click en el contenedor padre */
    /* console.log(e.target.textContent); */
    let guardar  = e.target.value  
    procesarInput(guardar)
}
)

const procesarInput = (guardar) =>{
    const caracteresArray = [0,1,2,3,4,5,6,7,8,9,"+","-","*","/","="];
    let currentCaracter = caracteresArray.find(
        /* recorro la lista de array y comparo el array con el numero guardar  y eso retorna el numero que se encontro */
        (numero)=> numero == guardar

    );
    if(currentCaracter == undefined){
        return;
    }else if(currentCaracter === "="){
        return;
    }
    let UltimoCaracterNumeroGeneral = numeroGeneral[numeroGeneral.length-1] 
    if(typeof currentCaracter == "number"){
        console.log("es un numero");    
        numeroGeneral.push(currentCaracter);
    }else if(typeof currentCaracter == "string" ){
        if(typeof UltimoCaracterNumeroGeneral === "number"){
        console.log("es un string");
        numeroGeneral.push(currentCaracter); 
    }else if(typeof UltimoCaracterNumeroGeneral == "string" ){

        numeroGeneral[numeroGeneral.length - 1] = currentCaracter;
    }
    }
    console.log(numeroGeneral);
    procesarOperaciones();
}

const procesarOperaciones = () =>{
    let primerNumero = [];
    let tipoDeOperacion = [];
    let UltimoCaracterNumeroGeneral = numeroGeneral[numeroGeneral.length-1] 
    for(caracter of numeroGeneral){
        if(typeof caracter === "number"){
            primerNumero.push(caracter);
            console.log(`lista primerNumero ${primerNumero}`);
        }else if (typeof caracter === "string"){
            tipoDeOperacion.push(caracter);
            console.log(`lista tipoOperacion ${tipoDeOperacion}`);
        }else if (typeof UltimoCaracterNumeroGeneral == "string"){
            numeroGeneral[numeroGeneral.length - 0] = tipoDeOperacion;
        }
       
    }
    

}


/*

 const calculadora = () =>{ 
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