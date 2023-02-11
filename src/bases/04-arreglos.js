//const arreglo = new Array();

const arreglo = [1, 2, 3, 4];

//insertar
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

let arreglo2 = [...arreglo, 5];
//map crea un nuevo objeto o arreglo y no hace referencia al anterior
const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);