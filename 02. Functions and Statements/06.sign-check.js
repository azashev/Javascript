function signCheck(...numbers) {
    return numbers
    .filter((num) => num < 0)
    .length % 2 === 0 ? 'Positive' : 'Negative';
}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));

// Task description
// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.
// Input:
// The input comes as parameters named numOne, numTwo, numThree.
// 
// Output:
// • If the result is positive, print "Positive"
// • Otherwise, print "Negative"
