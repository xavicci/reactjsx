const arreglo = new Array();

console.log(arreglo);

const arreglo2 = [1, 2, 3, 4]

console.log(arreglo2)

const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2
});


console.log(arreglo3)


const arreglo4 = arreglo3.map((numero) => { return (numero * 2) })
console.log(arreglo4);