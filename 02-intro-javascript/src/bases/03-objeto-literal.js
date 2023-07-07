const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 9873652,
        lat: 145.46584,
        lng: 215.54645,
    }
};

console.log(persona);

const persona2 = { ...persona };

console.log(persona2)