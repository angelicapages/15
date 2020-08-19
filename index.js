const edadDelUsuario= 12

const filtrandoLaEdadDelUsuario = (edad) => {
    if (edad >= 18) {
    return true
    }
    else {
    return false
    }
}

alert (filtrandoLaEdadDelUsuario (edadDelUsuario))
alert (filtrandoLaEdadDelUsuario (40))