function describe_city(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}

// Example calls to the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
