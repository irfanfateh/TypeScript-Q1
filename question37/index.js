function make_shirt(size, message) {
    if (size.toLowerCase() === 'large' || size.toLowerCase() === 'medium') {
        console.log("You have ordered a ".concat(size, " T-shirt with the default message \"I love TypeScript\"."));
    }
    else {
        console.log("You have ordered a ".concat(size, " T-shirt with the message \"").concat(message, "\" printed on it."));
    }
}
// Example call to the function
make_shirt("Large", "I like coding");
