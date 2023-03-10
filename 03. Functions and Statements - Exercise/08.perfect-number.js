function perfectNumber(number) {
    let sum = 0;

    for (let n = 1; n <= Math.floor(number / 2); n++) {
        if (number % n === 0) {
            sum += n;
        }
    }
    
    if (sum == number) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);

// Task description
// 
// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors.
// That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// 
// Output:
// • If the number is perfect, print: "We have a perfect number!"
// • Otherwise, print: "It's not so perfect."
