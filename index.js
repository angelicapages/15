//EJERCICIO 1

const edadDelUsuario= 12

const filtrandoLaEdadDelUsuario = (edad) => {
    if (edad >= 18) {
    return "Es positivo"
    }
    else {
    return "Es negativo"
    }
}

alert (filtrandoLaEdadDelUsuario (edadDelUsuario))
alert (filtrandoLaEdadDelUsuario (40))


//EJERCICIO 2

const avanzarSemaforo = (colorAcutal) => {

    if (colorAcutal == "verde") {
    return "amarillo"
    }

    else if (colorAcutal == "rojo") {
    return "verde"
    }

    else if (colorAcutal == "amarillo") {
        return "rojo"
    }
    
    else {
        return "ese color no aplica"
    }
}

alert (avanzarSemaforo ("verde"))
alert (avanzarSemaforo ("rojo"))
alert (avanzarSemaforo ("amarillo"))

//EJERCICIO 3

const esConsonante = (letra) => {
    if (letra !== letra =="a" || letra== "e" || letra== "i" || letra== "o" || letra== "u") {
    return "no es consonante"
    }
    else {
        return "Es una consonante"
    }
}
alert (esConsonante ("o"))
alert (esConsonante("p"))
alert (esConsonante("i"))
//EJERCICIO 4

const puedeRenovarCarnet = (pasoTest, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTest== true && tieneMultasImpagas== false && pagoImpuestos== true) {
        return "Usted puede revalidar su carnet"
    }
    
    else {
        return "Usted no puede revalidar su carnet" 
    }
}
    alert (puedeRenovarCarnet (true, false, false))
    alert (puedeRenovarCarnet (false,true, false))
    alert (puedeRenovarCarnet (true, false, true))
