var personName = "muhammad irfan";
console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
// Print person's name in titlecase
var words = personName.split(" ");
var titlecase = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join(" ");
console.log("Titlecase: " + titlecase);
