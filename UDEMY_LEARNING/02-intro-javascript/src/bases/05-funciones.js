const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola , ${nombre}`;
}

const saludar3 = (nombre) => `Hola , ${nombre}`;

const testeo = () => ({ edad: 24, nombre: "Adamaris" });

console.log(saludar(30));
console.log(saludar2("Xavi"));
console.log(saludar3("Flores"));
console.log(testeo());

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

const usuarioActivo2 = (nombre) => ({
    uid: 654645,
    username: nombre,
});


console.log(usuarioActivo2("XAVI FLORES"))