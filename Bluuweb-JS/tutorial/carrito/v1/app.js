const carrito = [];

const pedido = prompt("🛒 ");
carrito.push(pedido);

while (confirm("🛒? ")) {
  const pedido = prompt("🛒 ");
  carrito.push(pedido);
}
//? lista final
for (const item of carrito) {
  console.log(`Tu lista : ${item}`);
}
console.log(carrito);
