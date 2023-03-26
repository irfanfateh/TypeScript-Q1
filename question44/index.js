function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You have ordered a sandwich with the following items:");
    items.forEach(function (item) {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}
order_sandwich("butter", "cheese", "chips", "mayo");
order_sandwich("ham", "swiss cheese", "pickles");
order_sandwich("peanut butter", "jelly");
