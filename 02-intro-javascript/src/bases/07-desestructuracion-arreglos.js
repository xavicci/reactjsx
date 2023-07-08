const personajes = ['Gokku', 'Vegeta', 'Bulma'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);


const [gokus, , p3] = personajes;
console.log(gokus, p3)

const retornaArreglo = () => ['ABC', 123];

const arr = retornaArreglo();
console.log(arr)


const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

const usevState = (valor) => {
    return [valor, () => { console.log("HOLA MUNDO") }];
}

const hola = usevState('GOKU');

const [nombre, setNombre] = hola;

console.log(nombre, setNombre)

setNombre();