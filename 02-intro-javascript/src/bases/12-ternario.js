const activo = true;

let mensaje = '';

if (activo) {
    mensaje = 'Active';
} else {
    mensaje = 'Inactivo'
}


const mensaje2 = activo ? 'Activo' : 'Inactivo';

console.log(mensaje2);

const mensaje3 = activo && 'hello';
console.log(mensaje3);