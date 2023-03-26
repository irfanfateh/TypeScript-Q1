function car_info(manufacturer: string, model: string, ...kwargs: [string,any][]) {
  let car = {
    manufacturer: manufacturer,
    model: model
  };
  for (let i = 0; i < kwargs.length; i++) {
    car[kwargs[i][0]] = kwargs[i][1];
  }
  return car;
}

let my_car = car_info("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["sunroof", true]);
console.log(my_car);
