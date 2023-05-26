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
const numeroBoton = document.getElementById("numeroBoton");
const numeroBotonDos = document.getElementById("numeroBotonDos");
const numeroBotonMas = document.getElementById("numeroBotonMas");
const numeroBotonMenos = document.getElementById("numeroBotonMenos");
const numeroBotonIgual = document.getElementById("numeroBotonIgual");
const general = document.getElementById("general");
const guardar = [];
const keyner = document.getElementById("keyner");


general.addEventListener("click", (e)=>{
    let numeroArray = [0,1,2,3,4,5,6,7,8,9];
    let numeroArrayMap = []
    let simboloArray = ["+","-","*","/"];
    console.dir(e.target);
    /* console.log(numeroArray); */
    /* Con esto podemos saber  donde hemos hecho click en el contenedor padre */
    /* console.log(e.target.textContent); */
/*     if(e.target.value >= numeroArray){
        operacionInput.value += e.target.textContent
    }else if(e.target.value == simboloArray){
        operacionInput.value += e.target.textContent
    }  */
    numeroArray.map(
        (element) =>{
            if(element == 1){
            numeroArrayMap.push(element)
            console.log(numeroArrayMap)
            console.log(element)
            operacionInput.value += numeroArrayMap[0]
            operacionInput.textContent
            }
        }
    )

}
)


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