var names = ["Muhammad", 'Irfan', 'Sultan'];
var printInvitations = function (name) { return console.log("Dear ".concat(name, ",\nYou are cordially invited to dinner at my place.Please let me know if you can make it.\nSincerely, Muhamamd Irfan\n")); };
names.forEach(function (name) {
    printInvitations(name);
});
var busyGuestIndex = Math.floor(Math.random() * names.length);
console.log("".concat(names[busyGuestIndex], " can't make it to the dinner.\n"));
names[busyGuestIndex] = 'Mawahed';
names.forEach(function (name) {
    printInvitations(name);
});
console.log("Hey! i got a big dinner table, so i'm inviting more guests.");
names.unshift('Rehan');
names.splice(2, 0, 'Ali');
names.push('Usman');
names.forEach(function (name) {
    printInvitations(name);
});
console.log("I'm sorry to inform you that the big dinner table is not available, so unfortunately, I can only invite two guests.\n");
var removedGuests = names.splice(0, names.length - 2);
removedGuests.forEach(function (name) {
    console.log("i'm sorry ".concat(name, " to inform you that you are not invited"));
});
names.forEach(function (name) {
    printInvitations(name);
});
names.splice(0);
