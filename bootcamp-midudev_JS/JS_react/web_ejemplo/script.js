// console.log("first");
// let firstName = "Chanel";
// const lastfirstName = 4;
// var second = 10;

// //TODO: let se puede reasignar el valor
// //*!var no es segura porque se accede desde cualquier scope
// console.log(`Antes de asignar ${firstName}`);
// firstName = "Chanel2";
// console.log(`Despues de reasignar la variable con let${firstName}`);

// //* tipos mutables
// const firstName2 = "Step";
// f = firstName2.toUpperCase();
// console.log(f);

// const array = [2];
// array.push(1);
// const array2 = array.concat(10, 20); //* crea nueva lista y no modifica la original
// console.log(array2);
// console.log(array[0]); //* para acceder a la lista
// console.log(array);

// //* el string es inmutable
// const firstName = "Step";
// firstName.toUpperCase();
// console.log(firstName);

// //* Objetos
// const persona = {
//   name: "Juan",
//   edad: 2,
//   links: ["youtube.com", "http://google.com"],
// };
// console.log(persona.links);

//*functions

const sumar = (a, b) => {
  //?function expresion
  return a + b;
};
function restar(a, b) {
  //? declarativa
  return a - b;
}
const aa = 2;
const bb = 3;
console.log(restar(aa, bb));
console.log(restar(10, 9));
console.log(sumar(aa, bb));
console.log(sumar(1, 2));
