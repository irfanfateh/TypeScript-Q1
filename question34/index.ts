let favoritePizzas: string[] = ["Pepperoni", "Fajita", "Italian"];

for (let pizza of favoritePizzas) {
  console.log(pizza);
}

for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log(`I really love pizza! My favorite kinds are:`);
for (let pizza of favoritePizzas) {
  console.log(`- ${pizza}`);
}
