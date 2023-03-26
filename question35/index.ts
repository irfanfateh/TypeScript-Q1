let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
  console.log(animal);
}

for (let animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log(`All of these animals are common pets, and would make great companions!`);
