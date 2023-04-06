const personName: string = "muhammad irfan";

console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());

// Print person's name in titlecase
const words = personName.split(" ");
const titlecase = words.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join(" ");
console.log("Titlecase: " + titlecase);
