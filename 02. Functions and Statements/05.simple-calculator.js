function simpleCalculator(firstNum, secondNum, operator) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    const operationMap = {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    }

    return operationMap[operator](firstNum, secondNum);
}

console.log(simpleCalculator(5, 5, 'multiply'));
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(12, 19, 'add'));
console.log(simpleCalculator(50, 13, 'subtract'));


// Task description:
// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. Operator can be:
// 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.
// 
// Bonus:
// Solve this task without using any conditional statements (no if or switch statements or ternary operators).
