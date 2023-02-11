// Desestructuracion

// Asignaion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
}

const { nombre, edad, clave } = persona

//console.log(nombre)
//console.log(edad)
//console.log(clave)

const papas = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    //const { nombre, edad, clave } = usuario
    //console.log(edad, clave, nombre);

    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12,
            lng: -15.12,
        }

    }
}
//trae parametros de dentro(anidados) del objeto
const { nombreClave, anios, latlng: { lat, lng } } = papas(persona);
console.log(nombreClave);
console.log(lat);