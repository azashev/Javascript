function calculations(firstNum, secondNum, thirdNum) {
  const sum = (a, b) => a + b;
  const subtract = (mySum, c) => mySum - c;

  return subtract(sum(firstNum, secondNum), thirdNum);
}

console.log(calculations(23, 6, 10));
console.log(calculations(1, 17, 30));
console.log(calculations(42, 58, 100));

// Task description
// 
// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.
