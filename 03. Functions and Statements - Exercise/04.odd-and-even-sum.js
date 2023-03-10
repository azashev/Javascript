function oddEvenSum(num) {
    let digits = num.toString().split("").map(Number);
    let oddSum = digits.filter((digit) => digit % 2 !== 0).reduce((pValue, cValue) => pValue + cValue, 0);
    let evenSum = digits.filter((digit) => digit % 2 === 0).reduce((pValue, cValue) => pValue + cValue, 0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);


// Task description
// 
// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.
