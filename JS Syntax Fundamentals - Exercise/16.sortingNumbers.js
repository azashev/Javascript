function solve(numbers) {
    let result = [];
    let sortedNumbers = [...numbers].sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 == 0) {
            result.push(sortedNumbers.shift());
        } else {
            result.push(sortedNumbers.pop());
        }
        
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
