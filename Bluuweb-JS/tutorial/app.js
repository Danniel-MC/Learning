//todo: ARRAYS
const comida = ["🍔", "🍟", "🍙", "🥓", "🥪"];
// console.log(comida);

const long = comida.length;
//? modificar los arrays
// comida.push("🥝"); //*agrega al final
// comida.unshift("🍿"); //* agg al inicio y modifica los indices
// const a = comida.shift("🍿"); //* elimina el primer de la lista
// console.log(comida.pop())//* elimina el ultimo
// console.log(a);

// console.log(comida);

//! funciones declarativa
// function numRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(numRandom(0, 10));

//! funcion expresadas

// const numrandom = function (min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(numrandom(0, 5));

//todo: funcion arrow
// const numero = (max) => {
//   return Math.floor(Math.random() * (max - 1) + 1);
// };
// console.log(numero(5));

//? arrow y foreach
comida.forEach((item) => {
  console.log(item);
});
comida.forEach((item, index, array) => {
  console.log(`${index}: ${item}`);
});

//? recorrer arrays
// for (let i = 0; i < long; i++) {
//   console.log(comida[i]);
// }

//?* for of
// for (const item of comida) {
//   console.log(item);
// }

//! Funciones
// function mensaje(nameu) {
//   return "Welcome " + nameu;
// }
// function Suma(a, b) {
//   return a + b;
// }
// function suma(a, b) {
//   return a + b;
// }
// const na = 5;
// const nb = 6;
// console.log(suma(na, nb));
// console.log(Suma(1, 2));
// console.log(mensaje("Step"));

//TODO: objetos
console.log(comida);
