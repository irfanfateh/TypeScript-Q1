function show_magicians(magicians) {
    magicians.forEach(function (magician, index) {
        console.log("".concat(index + 1, "- ").concat(magician));
    });
}
function show_great(magicians) {
    magicians = magicians.map(function (magician) {
        return "The Great " + magician;
    });
    show_magicians(magicians);
}
var magicians = ['A_magician', 'B_magician', 'C_magician'];
show_magicians(magicians);
show_great(magicians);
