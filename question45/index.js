function car_info(manufacturer, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < kwargs.length; i++) {
        car[kwargs[i][0]] = kwargs[i][1];
    }
    return car;
}
var my_car = car_info("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["sunroof", true]);
console.log(my_car);
