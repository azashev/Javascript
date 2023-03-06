function calculate(typeOfFruit, amountInGrams, pricePerKg) {
    let amountInKg = amountInGrams / 1000;
    let totalPrice = pricePerKg * amountInKg;

    console.log(`I need \$${totalPrice.toFixed(2)} to buy ${amountInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}

calculate('orange', 2500, 1.80);
calculate('apple', 1563, 2.35);
