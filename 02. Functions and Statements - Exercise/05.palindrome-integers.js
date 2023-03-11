function palindromes(numbers) {
    for (const el of numbers) {
        if (el.toString().split("").reverse().join("") == el) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromes([123, 323, 421, 121]);

// Task description
// 
// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if 
// each integer is a palindrome or not.
// 
// Output:
// • If the current integer is a palindrome, print: "true"
// • Otherwise, print: "false"
