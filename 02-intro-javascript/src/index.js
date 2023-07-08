const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5664965,
        lat: 14.235,
        lng: 546.549,
    }
};

// console.table(persona);


const persona2 = { ...persona }
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);