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

    if (colorAcutal = "verde") {
    return "amarillo"
    }

    else if (colorAcutal = "rojo") {
    return "verde"
    }

    else if (colorAcutal = "amarillo") {
        return "rojo"
    }
}

alert (avanzarSemaforo ("verde"))
alert (avanzarSemaforo ("rojo"))
alert (avanzarSemaforo ("amarillo"))