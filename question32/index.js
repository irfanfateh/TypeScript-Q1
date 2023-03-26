var current_users = ['admin', 'eric', 'john', 'Ali', 'Usman'];
var new_users = ['admin', 'irfan', 'john', 'ayyan', 'utban'];
var lowerCaseCurrentUsers = current_users.map(function (current_user) { return current_user.toLowerCase(); });
new_users.forEach(function (name) {
    if (lowerCaseCurrentUsers.indexOf(name.toLowerCase()) >= 0) {
        console.log("Sorry, the username '".concat(name, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(name, "' is available."));
    }
});
