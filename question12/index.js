var personName = ["Muhammad", 'Irfan', 'Mowahed', 'Rehan', 'Ali'];
var msg = 'Hello name !, how are you?';
personName.forEach(function (name) {
    console.log(msg.replace('name', name));
});
