function order_sandwich(...items: string[]) {
  console.log("You have ordered a sandwich with the following items:");
  items.forEach((item:string)=>{
    console.log("- " + item);
  });
  console.log("Enjoy your sandwich!");
}

order_sandwich("butter", "cheese", "chips", "mayo");
order_sandwich("ham", "swiss cheese", "pickles");
order_sandwich("peanut butter", "jelly");
