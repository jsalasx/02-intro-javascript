const persona = {
    nombre: "Ale",
    apellido: "Salas",
    edad: 45,
    direccion: {
        ciudad: 'Guaranda',
        zip: 23112121,
        lat: 14.3232,
        lng: 34.92

    }
};


//console.table({ persona });


const persona2 = { ...persona }

persona2.nombre = 'Peter';

console.log(persona)
console.log(persona2);