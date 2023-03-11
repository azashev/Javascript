function factorialDivision(firstNum, secondNum) {
    let firstFactorial = factorial(firstNum);
    let secondFactorial = factorial(secondNum);

    function factorial(num) {
        if (num === 1) {
            return 1;
        }

        return num * factorial(num - 1);
    }

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);

// Task description
// 
// Write a function that receives two integer numbers. Calculate the factorial of each number.
// Divide the first result by the second and print the division formatted to the second decimal point.
