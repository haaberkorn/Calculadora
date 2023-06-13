const resultado = document.getElementById("resultado");
const operacionInput = document.getElementById("operacionInput");
const general = document.getElementById("general");
let numeroGeneral = [];
let acumuladoGeneral = 0;

general.addEventListener("click", (e)=>{
    /* console.dir(e.target); */
    /* console.log(numeroArray); */
    /* Con esto podemos saber  donde hemos hecho click en el contenedor padre */
    /* console.log(e.target.textContent); */
    let elementoPresionado  = e.target.value  
    procesarInput(elementoPresionado)
}
)

const procesarInput = (elementoPresionado) =>{
    const caracteresArray = [0,1,2,3,4,5,6,7,8,9,"+","-","*","/","="];
    let currentCaracter = caracteresArray.find(
        /* recorro la lista de array y comparo el array con el numero guardar  y eso retorna el numero que se encontro */
        (elemento)=> elemento == elementoPresionado
    );
    if(currentCaracter == undefined){
        return;
    }else if(currentCaracter === "="){
        procesarOperaciones();
        numeroGeneral = [acumuladoGeneral];
        resultado.innerText = acumuladoGeneral;
        return;
    }

    modificarNumeroGeneral(currentCaracter);
    operacionInput.value = quitarComas();
}

const modificarNumeroGeneral = (currentCaracter) =>{
    let UltimoCaracterNumeroGeneral = numeroGeneral[numeroGeneral.length-1] 
    if(typeof currentCaracter == "number"){
        numeroGeneral.push(currentCaracter);
    }else if( typeof currentCaracter == "string" ){
        if( typeof UltimoCaracterNumeroGeneral == "number"){
            numeroGeneral.push(currentCaracter); 
        }else if( typeof UltimoCaracterNumeroGeneral == "string" ){
            //Si tengo un caracter al final y escribo otro lo sobreescribo
            // ['2','3','+']
            // ['2','3','-']
            numeroGeneral[numeroGeneral.length - 1] = currentCaracter;  
        }
    }
}

const quitarComas = () =>{
    let sinComaNumeroGeneral = numeroGeneral.toString();
    let listaNuevaSinComaNumeroGeneral = sinComaNumeroGeneral.replaceAll(',','')
    console.log(listaNuevaSinComaNumeroGeneral);
    return listaNuevaSinComaNumeroGeneral;
    // return numeroGeneral.toString().replaceAll(',', '');
    
    // return numeroGeneral.toString().split(',').join();




/*     let code = '12312-213123-1231312-41233441';
    
    //Forma 1
    let listaSeparada = code.split('-');
    console.log(listaSeparada);
    //['12312', '213123', '1231312', '41233441']
    let listaUnida = listaSeparada.join();
    console.log(listaUnida);
    //'12312213123123131241233441']
    
    //Forma2
    let nuevaListaUnida = code.replaceAll('-', '')
    console.log(nuevaListaUnida);

    //Split cuando se usa vacio
    let nombre = 'Mariana';
    let letras = nombre.split('');
    // [M,a,r,i,a,n,a] */

}

const procesarOperaciones = () =>{
    let primerNumero = {
        valor: "",
        completado: false 
    }
    let segundoNumero = {
        valor: "",
        completado: false 
    }

    let tipoDeOperacion = "";
    
    for(elementoNumeroGeneral of numeroGeneral){
        //[ 2, 4, '+', 1, 2]
        
        if(typeof elementoNumeroGeneral === "number" && (primerNumero.completado == false)){
            if(acumuladoGeneral > 0){
                primerNumero.valor = acumuladoGeneral.toString();
            }else{
                primerNumero.valor += elementoNumeroGeneral.toString();
            }
        
        }else if (typeof elementoNumeroGeneral === "string"){
            tipoDeOperacion += elementoNumeroGeneral;
            primerNumero.completado = true
        }else if(typeof elementoNumeroGeneral === "number" && (segundoNumero.completado == false)){
            segundoNumero.valor += elementoNumeroGeneral;
        }
    }
    let operacion = realizarOperacion(primerNumero.valor,segundoNumero.valor,tipoDeOperacion)
    acumuladoGeneral = operacion;
}

const realizarOperacion = (primerNumero, segundoNumero,tipoOperacion) =>{
    let valor1 = parseFloat(primerNumero);
    let valor2 = parseFloat(segundoNumero);

    switch (tipoOperacion) {
        case "+":
            return valor1 + valor2
        case "-":
            return valor1 - valor2
        case "*":
            return valor1 * valor2
        case "/":
            return valor1 / valor2
        default:
            break;
    }
}   
