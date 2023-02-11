

const personajes = ['Goku', 'Vegeta', 'Trunks'];

//console.log(personajes[0]);
//console.log(personajes[1]);
//console.log(personajes[2]);

const [, , p3] = personajes;

//console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

//console.log(letras);
//console.log(numeros);


//

const state = (valor) => {
    return [valor, () => { console.log("hola mundo"); }];
}


const arr = state('Goku');

const [nombre, setNombre] = state('Goku');


//lamar funcion dentro de arreglo
//arr[1]();

//Tarea
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre


console.log(nombre);
setNombre();

