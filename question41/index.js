function show_magicians(magicians) {
    magicians.forEach(function (magician, index) {
        console.log("".concat(index + 1, "- ").concat(magician));
    });
}
var magicians = ['A_magician', 'B_magician', 'C_magician'];
show_magicians(magicians);
