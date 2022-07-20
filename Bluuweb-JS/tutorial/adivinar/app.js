let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
console.log(`Maquina: ${numeroMaquina}`);

let vidas = 3;
let numberUser = parseInt(prompt("Adivina el number 1 at 10"));

while (numeroMaquina !== numberUser && vidas > 1) {
  //todo: operador ternario
  let Mensaje2 = numeroMaquina > numberUser ? true : false;
  numberUser = parseInt(prompt("Adivina el number 1 at 10"));
  console.log(`Ingresaste ${numberUser} tonses nau nau 🐱‍🚀 ${Mensaje2}`);

  vidas--;
  console.log("Vida:" + vidas);
}

if (numeroMaquina === numberUser) {
  console.log(`Ingresaste ${numberUser} tonses ganaste 🐱‍🐉`);
} else {
  console.log(`Ingresaste ${numberUser} tonses nau nau 🐱‍🚀`);
}
