const nombre = "Xavier";
const apellido = "Flores";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `mi nombre es ${nombre} ${apellido}`

console.log(nombreCompleto);



function getSaludo(nombre) {
    return 'Hola ' + nombre;

}

console.log(`Este es un texto: ${getSaludo('Xavier')}`)