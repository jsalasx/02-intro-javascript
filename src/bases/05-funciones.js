// funciones

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

//saludar = 20;

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;


const getUser = () => ({
    uid: 'AB123',
    username: "xtdrack"
})


//Tarea
//1. Funcion de flecha
//2. Tiene qe retornar un objeto implicito
//3. PRuebas
function getUsuarioActivo(nombre) {
    return {
        uid: 'AB123',
        username: nombre
    }
}

const getUsuarioActivoFlecha = (nombre) => ({
    uid: 'AB123',
    username: nombre
})

const usuarioActivo = getUsuarioActivo("Alejandro");
const usuarioActivo2 = getUsuarioActivoFlecha("Ale");
console.log(usuarioActivo)
console.log(usuarioActivo2)