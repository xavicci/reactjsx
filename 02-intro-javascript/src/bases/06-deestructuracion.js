const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const { edad, clave, nombre } = persona;

console.log(edad);
console.log(nombre);
console.log(clave);