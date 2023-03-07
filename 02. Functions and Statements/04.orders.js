function calculatePrice(product, quantity) {
    let result;
    switch (product) {
        case "coffee":
            result = quantity * 1.5;
            break;
        case "water":
            result = quantity * 1;
            break;
        case "coke":
            result = quantity * 1.4;
            break;
        case "snacks":
            result = quantity * 2;
            break;
        default:
            result = "Invalid";
            break;
    }

    console.log(result.toFixed(2));
}

calculatePrice("water", 5);
calculatePrice("coffee", 2);
calculatePrice("neshto", 1);


// Task description
// Write a function that calculates the total price of an order and prints it on the console. The function should receive one of the following products:
// coffee, coke, water, snacks; and a quantity of the product.
// The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// 
// Print the result formatted to the second decimal place.
