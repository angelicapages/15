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